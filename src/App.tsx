import { ThemeProvider } from "styled-components";
import theme from "./theme/theme.ts";
import Home from "./pages/Home/index.tsx";
import GlobalStyle from "./@config/global.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
