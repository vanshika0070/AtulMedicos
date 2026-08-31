import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./Home";
import Products from "./Products";
import ProductsAll from "./ProductsAll";
import About from "./About";
import HealthTips from "./HealthTips";
import HealthArticle from "./HealthArticle";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        {/* Product category slug pages */}
        <Route
          path="/productsall/:slug"
          element={<ProductsAll />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/healthTips" element={<HealthTips />} />

        {/* Health article slug pages */}
        <Route
          path="/health-tips/:slug"
          element={<HealthArticle />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;