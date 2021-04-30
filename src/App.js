import ThemeProvider from "Styles/ThemeProvider";
import GlobalStyle from "Styles/GlobalStyle";
import Home from "Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "Components/Pages/About";
import ProductDetail from "Components/Pages/ProductDetail";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
