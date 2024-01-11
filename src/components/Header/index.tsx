import * as S from "./styles";
import { MenuItems, SocialMedia } from "./constants";
import * as T from "./types";
import Logo from "../../assets/jc.svg?react";
import SocialMediaItems from "../SocialMediaItems";
import MoreInfo from "../../assets/moreInfo.svg?react";

const Header: React.FC<T.HeaderProps> = ({ isSelected }) => {
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
          {MenuItems.map((item, key) => (
            <S.MenuTags isSelected={isSelected} key={key}>
              {item}
            </S.MenuTags>
          ))}
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
