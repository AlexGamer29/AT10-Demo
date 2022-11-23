import "./App.css";
import { Home, Product } from "./pages";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Breadcrumb, Header, ProductDetail } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Breadcrumb />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/san-pham" element={<Product />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
