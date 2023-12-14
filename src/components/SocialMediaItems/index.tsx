import * as S from "./styles";
import { TSocialMediaItems } from "./types";

const SocialMediaItems: React.FC<TSocialMediaItems> = ({
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
