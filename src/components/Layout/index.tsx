import { useState } from "react";
import * as S from "./styles";
import * as T from "./types";
import Header from "../Header";
import FloatingBar from "../FloatingBar";

const Layout: React.FC<T.Layout> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<boolean>(false);
  return (
    <S.Container>
      <Header
        isSelected={selectedItem}
        handleChangeSelection={() => setSelectedItem((prev) => !prev)}
      />
      <FloatingBar />
      {children}
    </S.Container>
  );
};

export default Layout;
