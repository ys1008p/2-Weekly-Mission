import { Layout } from "../../feature/Layout";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Layout>
      <Link to="shared">shared가는 링크</Link>
      <Link to="folder">folder가는 링크</Link>
    </Layout>
  );
};
