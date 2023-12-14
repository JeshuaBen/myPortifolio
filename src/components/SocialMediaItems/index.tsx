import * as S from "./styles";
import * as T from "./types";

const SocialMediaItems: React.FC<T.SocialMediaItems> = ({
  Svg,
  description,
  onClick,
}) => {
  return (
    <S.Container onClick={onClick}>
      <Svg />
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default SocialMediaItems;
