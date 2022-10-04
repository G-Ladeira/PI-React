import { Link } from "react-router-dom";
import CartHeader from "./cartHeader";
import "./styled.sass";


import BasicMenu from "./userOn";





const Header = () => {
  return (
    <main className="navBar">

      <Link className="linkTest" to={"/"}>
        <h1 className="btnH1">Wendy Taylor</h1>

      </Link>
      



      <ul className="navOptions">
        <Link to={"/products"}>
          <li className="toJoias" >Joias</li>
        </Link>
        <Link to={"/aboutUs"}>
          <li className="toAbt" >Sobre nós</li>
        </Link>
        <Link to={"/cadastro"}>
          <li className="toCadst" >Cadastro</li>
        </Link>
        <Link to={"/login"}>
          <li className="toLogin" >Login</li>
        </Link>
        
      </ul>
      <CartHeader />
      <BasicMenu />
      
    </main>
  );
};

export default Header