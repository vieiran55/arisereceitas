import { Link } from "react-router-dom";
import estilos from "./Home.module.scss";

export default function Home() {
  const topo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={estilos.home}>
        <div>
          <h1 className={estilos.home__titulo}>
            <a className={estilos.home__titulo__1}>ARISE</a>
            <a className={estilos.home__titulo__2}>RECEITAS</a>
          </h1>
        </div>
        <div className={estilos.home__imagemConteiner}>
          <h2 className={estilos.home__imagemConteiner__titulo}>DISCOVER AMAZING FLAVORS</h2>
          <Link to="/receitas" onClick={()=> topo()} className={estilos.home__imagemConteiner__botao}>GO IT</Link>
        </div>
      </div>
    </>
  );
}
