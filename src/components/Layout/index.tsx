import FloatingBar from "../FloatingBar";
import * as S from "./styles";
import * as T from "./types";

const Layout: React.FC<T.Layout> = ({ children }) => {
  return (
    <S.Container>
      <FloatingBar />
      {children}
    </S.Container>
  );
};

export default Layout;
