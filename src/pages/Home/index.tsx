import Layout from "../../components/Layout";
import ProfileBox from "../../components/ProfileBox";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <Layout>
      <S.Container>
        <S.Title>Full-Stack Developer</S.Title>

        <ProfileBox />
      </S.Container>
    </Layout>
  );
};

export default Home;
