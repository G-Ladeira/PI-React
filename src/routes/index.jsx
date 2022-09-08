import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home";
import { AboutUs } from "../views/aboutUs";
import { Product } from "../views/product";
import  Login  from "../views/login";
import Cadastro from "../views/cadastro";
import Perfil from "../views/perfil"
import CheChout from "../views/checkout";
import Cart from "../views/cart";
import Products from "../views/products";




export const MainRoutes = ()=>{
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/checkout" element={<CheChout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />

            </Routes> 
        </>
    )
}

