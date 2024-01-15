import * as S from "./styles";
import { FloatingBarItems } from "./constants";

const FloatingBar: React.FC = () => {
  return (
    <S.Container>
      {FloatingBarItems.map((item, index) => (
        <S.IconWrapper key={index}>
          <item.svg fill="#000" />
        </S.IconWrapper>
      ))}
    </S.Container>
  );
};

export default FloatingBar;
