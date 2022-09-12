import { Link } from "react-router-dom";
import "./styled.sass";
import Button from '@mui/material/Button';
import BasicMenu from "../userOn";

const Header = () => {
  return (
    <main className="navBar">
      <h1>Wendy Taylor</h1>
      <Button variant="contained">Hello World</Button>
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
      <BasicMenu />
    </main>
  );
};

export default Header