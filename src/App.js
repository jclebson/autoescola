import ThemeProvider from "Styles/ThemeProvider";
import GlobalStyle from "Styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "Routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
