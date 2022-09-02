import { Link } from "react-router-dom";
import "./styled.sass";
import UserLogged from "../userOn"

const Header = () => {
  return (
    <main>
      <h1>Wendy Taylor</h1>

      <ul>
        <Link to={"/aboutUs"}>
          <li>Joias</li>
        </Link>
        <Link to={"/aboutUs"}>
          <li>Sobre nós</li>
        </Link>
        <Link to={"/aboutUs"}>
          <li>Cadastro</li>
        </Link>
        <Link to={"/aboutUs"}>
          <li>Login</li>
        </Link>
      </ul>
      <UserLogged/>
    </main>
  );
};

export default Header