import { Routes, Route} from "react-router-dom";
import { Home } from "../views/home/index";
import { AboutUs } from "../views/aboutUs";

export const MainRoutes = ()=>{
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
                
            </Routes> 
        </>
    )
}