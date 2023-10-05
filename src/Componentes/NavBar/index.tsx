import { Link } from "react-router-dom";
import estilos from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <h1 className={estilos.destaqueTitulo}>
          <a className={estilos.destaqueTitulo__1}>ARISE</a>
          <a className={estilos.destaqueTitulo__2}>RECEITAS</a>
        </h1>
      </Link>
    </div>
  );
}
