import { Link } from "react-router-dom";
import "./styled.sass";

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
    </main>
  );
};

export default Header