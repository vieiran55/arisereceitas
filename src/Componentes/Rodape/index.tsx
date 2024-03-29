import { Link } from "react-router-dom";
import estilos from "./Rodape.module.scss";
import logo from "../../assets/images/logoCvtrsy.png";

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.rodape__coteiner}>
        <Link
          to="https://linktr.ee/al_vieirah"
          className={estilos.rodape__coteiner__texto}
        >
          <img className={estilos.logo} src={logo}></img>
        </Link>
      </div>
    </footer>
  );
}
