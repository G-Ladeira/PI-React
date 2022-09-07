import { Link } from "react-router-dom";
import "./styled.sass";
// import UserLogged from "../userOn"

const Header = () => {
  return (
    <main className="navBar">

      


      <h1>Wendy Taylor</h1>

      
      


      <ul className="navOptions">
      <Link to={"/aboutUs"}>
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
      {/* <UserLogged/> */}
    </main>
  );
};

export default Header