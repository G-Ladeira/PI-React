import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home/index";
import { AboutUs } from "../views/aboutUs";
import { Product } from "../views/product";
import { Products } from "../views/products";

export const MainRoutes = ()=>{
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/products" element={<Products />} />
            </Routes> 
        </>
    )
}

