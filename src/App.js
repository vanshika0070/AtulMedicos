import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./Home";
import Productsall from "./Productsall";
import ProductsDetails from "./ProductsDetails"; // <-- Import this
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
        <Route path="/productsall" element={<Productsall />} />

        {/* Dynamic slug route */}
        <Route path="/:slug" element={<ProductsDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/healthTips" element={<HealthTips />} />

        <Route path="/health-tips/:slug" element={<HealthArticle />}/> </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;