import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home/index";
import { AboutUs } from "../views/aboutUs";
import { Product } from "../views/product";
import { Products } from "../views/Products";
import Cart from "../views/cart/carts";
import Checkout from "../views/checkout/checkout";




export const MainRoutes = ()=>{
    return (
        <>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            
            </Routes> 
        </>
    )
}

