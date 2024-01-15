import Layout from "../../components/Layout";
import ProfileBox from "../../components/ProfileBox";
import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <Layout>
      <S.Container>
        <S.Title>Fullstack Developer</S.Title>

        <S.Content>
          <ProfileBox />
        </S.Content>
      </S.Container>
    </Layout>
  );
};

export default Home;
