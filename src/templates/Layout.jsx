import { Footer } from "../organisms/Footer/Footer";
import { getCodeItInfo } from "../api/codeit";
import { Header } from "../organisms/Header/index";
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCodeItInfo(`users/1`);
      const { email, image_source } = data[0] || {};
      const profile = data ? { email, image_source } : null;
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
