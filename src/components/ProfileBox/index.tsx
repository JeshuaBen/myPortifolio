import PersonalInfo from "../PersonalInfo";
import * as S from "./styles";

const ProfileBox: React.FC = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image />
      </S.ImageContainer>

      <S.NameWrapper>
        <S.Name>Jeshua Ben </S.Name>
        <S.Description>FullStack Developer</S.Description>
      </S.NameWrapper>

      <PersonalInfo
        email="jeshuacostafer@gmail.com"
        experience=""
        jobDescription=""
        nacionality=""
      />
    </S.Container>
  );
};

export default ProfileBox;
