import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home";
import { AboutUs } from "../views/aboutUs";
import { Product } from "../views/product";

export const MainRoutes = ()=>{
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/product" element={<Product/>}/>
                
            </Routes> 
        </>
    )
}