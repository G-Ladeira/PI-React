import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home";
import { AboutUs } from "../views/aboutUs";
import { Products } from "../views/products";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};
