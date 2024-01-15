import * as S from "./styles";
import { SocialMedia } from "./constants";
import * as T from "./types";
import Logo from "../../assets/jc.svg?react";
import SocialMediaItems from "../SocialMediaItems";
import MoreInfo from "../../assets/moreInfo.svg?react";

const Header: React.FC<T.HeaderProps> = ({
  isSelected,
  handleChangeSelection,
  name,
}) => {
  const handleNavigate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <S.Container>
      <S.Content>
        <S.LogoWrapper>
          <Logo
            style={{
              width: "30%",
            }}
          />
          <S.LogoTitle>JeshuaCosta</S.LogoTitle>
        </S.LogoWrapper>

        <S.MenuTagsWrapper>
          <S.Home
            isSelected={isSelected}
            name={name}
            onClick={handleChangeSelection}
          >
            Home
          </S.Home>
          <S.Projects
            isSelected={!isSelected}
            name={name}
            onClick={handleChangeSelection}
          >
            Projects
          </S.Projects>
        </S.MenuTagsWrapper>

        <S.SocialMediaWrapper>
          {SocialMedia.map((item, key) => (
            <SocialMediaItems
              key={key}
              description={item.description}
              Svg={item.svg}
              onClick={() => handleNavigate(item.url)}
            />
          ))}
        </S.SocialMediaWrapper>

        <S.MoreInfoContainer>
          <MoreInfo />
        </S.MoreInfoContainer>
      </S.Content>
    </S.Container>
  );
};

export default Header;
