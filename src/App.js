import ThemeProvider from "Styles/ThemeProvider";
import GlobalStyle from "Styles/GlobalStyle";
import Home from "Components/Pages/Home";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
