import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home";

import { Product } from "../views/product";

import  Login  from "../views/login";
import Cadastro from "../views/cadastro";
import Perfil from "../views/perfil"
import AboutView from "../views/aboutUs";
import CheChout from "../views/checkout";
import Cart from "../views/cart";
import Products from "../views/products";
import Teste from "../views/Teste";




export const MainRoutes = ()=>{
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutView/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/checkout" element={<CheChout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/test" element={<Teste />} />
            <Route path="/categorias/:id" exact element={<Products/>}/>
            

            </Routes> 
        </>
    )
}

