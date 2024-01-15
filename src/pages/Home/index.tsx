import { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<boolean>(false);

  return (
    <Layout>
      <Header
        isSelected={selectedItem}
        handleChangeSelection={() => setSelectedItem((prev) => !prev)}
      />
    </Layout>
  );
};

export default Home;
