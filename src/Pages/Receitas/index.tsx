import { useEffect, useState } from "react";
import Buscador from "../../Componentes/Buscador";
import NavBar from "../../Componentes/NavBar";
import ReceitaNome from "../../Componentes/ReceitaNome";
import { IReceita } from "../../interfaces/IReceita";
import estilos from "./Receitas.module.scss";

interface Props {
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>;
  validaYtb: boolean;
  setValidaYtb: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Receitas(props: Props) {
  const buscarReceitas = () => {
    // Coloque aqui a lógica que você deseja executar quando o usuário clicar em "More..."
    // Por exemplo:
    console.log("Clicou em More...");
  };
  // Constantes
  const { receitas, setReceitas, validaYtb, setValidaYtb } = props;
  const [pesquisa, setPesquisa] = useState("");
  const [tipoBusca, setTipoBusca] = useState("");
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [validarNull, setValidarNull] = useState(false);

  // Dentro do componente Buscador
  function onMoreClick(nome: string) {
    setTipoBusca("nome");
    setPesquisa(nome);
  }
  //Função para selecionar o item menu
  console.log(receitas);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Buscador
          receitas={receitas}
          setReceitas={setReceitas}
          validaYtb={validaYtb}
          setValidaYtb={setValidaYtb}
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
          tipoBusca={tipoBusca}
          setTipoBusca={setTipoBusca}
          pesquisaRealizada={pesquisaRealizada}
          setPesquisaRealizada={setPesquisaRealizada}
          isShown={isShown}
          setIsShown={setIsShown}
          validarNull={validarNull}
          setValidarNull={setValidarNull}
        />
      </div>
      <div>
        <ReceitaNome
          receitas={receitas}
          setReceitas={setReceitas}
          validaYtb={validaYtb}
          isShown={isShown}
          setIsShown={setIsShown}
          onMoreClick={onMoreClick}
        />
      </div>
    </>
  );
}
