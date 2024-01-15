import * as S from "./styles";
import * as T from "./types";
import Mail from "../../assets/mail.svg?react";
import MapPin from "../../assets/mapPin.svg?react";
import Briefcase from "../../assets/briefcase.svg?react";
import Link from "../../assets/link.svg?react";

const PersonalInfo: React.FC<T.TPersonalInfo> = ({
  email,
  experience,
  jobDescription,
  nacionality,
}) => {
  const PersonalInfo: T.TInfo = [
    {
      icon: Mail,
      description: email,
    },
    {
      icon: MapPin,
      description: nacionality,
    },
    {
      icon: Briefcase,
      description: jobDescription,
    },
    {
      icon: Link,
      description: experience,
    },
  ];

  return (
    <S.Container>
      {PersonalInfo.map((info, index) => (
        <S.InfoContainer key={index}>
          <info.icon />
          <S.InfoDescrption>{info.description}</S.InfoDescrption>
        </S.InfoContainer>
      ))}
    </S.Container>
  );
};

export default PersonalInfo;
