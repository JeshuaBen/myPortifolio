import PersonalInfo from "../PersonalInfo";
import * as S from "./styles";

const ProfileBox: React.FC = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src="https://avatars.githubusercontent.com/u/89667317?v=4" />
      </S.ImageContainer>

      <S.NameWrapper>
        <S.Name>Jeshua Ben </S.Name>
        <S.Description>Full-stack Developer</S.Description>
      </S.NameWrapper>

      <PersonalInfo
        email="jeshuacostafer@gmail.com"
        nacionality="João Pessoa, PB - Brasil."
        jobDescription="Full-time | Freelancer"
        experience="2 anos e 6 meses"
      />
    </S.Container>
  );
};

export default ProfileBox;
