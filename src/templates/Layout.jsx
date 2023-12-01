import { Footer } from "../organisms/Footer/Footer";
import { getCodeItInfo } from "../api/codeit";
import { Header } from "../organisms/Header/index";
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCodeItInfo(`sample/user`);
      const { email, profileImageSource } = data || {};
      const profile = data ? { email, profileImageSource } : null;
      setProfile(profile);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
