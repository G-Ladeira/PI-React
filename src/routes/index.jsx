import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home";
import { AboutUs } from "../views/aboutUs";
import { Product } from "../views/product";
import { Products } from "../views/products";
import  Login  from "../views/login";
import Cadastro from "../views/cadastro";




export const MainRoutes = ()=>{
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            </Routes> 
        </>
    )
}

