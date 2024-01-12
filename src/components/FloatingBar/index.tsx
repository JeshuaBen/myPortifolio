import { FloatingBarItems } from "./constants";
import * as S from "./styles";

const FloatingBar: React.FC = () => {
  return (
    <S.Container>
      {FloatingBarItems.map((item, index) => (
        <S.IconWrapper key={index}>
          <item.svg />
        </S.IconWrapper>
      ))}
    </S.Container>
  );
};

export default FloatingBar;
