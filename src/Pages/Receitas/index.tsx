import { useState } from "react";
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
  const { receitas, setReceitas, validaYtb, setValidaYtb } = props;
  const [pesquisa, setPesquisa] = useState("");
  const [tipoBusca, setTipoBusca] = useState("");
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [validarNull, setValidarNull] = useState(false);
  const [receitaNome, setReceitaNome] = useState(false);
  const [receitaIngrediente, setReceitaIngrediente] = useState(false);
  const [receitaPrimeiraLetra, setReceitaPrimeiraLetra] = useState(false);

  function onMoreClick(nome: string) {
    setTipoBusca("nome");
    setPesquisa(nome);
  }

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <div className={estilos.corpo}>
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
            receitaNome={receitaNome}
            setReceitaNome={setReceitaNome}
            receitaIngrediente={receitaIngrediente}
            setReceitaIngrediente={setReceitaIngrediente}
            receitaPrimeiraLetra={receitaPrimeiraLetra}
            setReceitaPrimeiraLetra={setReceitaPrimeiraLetra}
          />
        </div>
        <div className={estilos.receitaNome}>
          <ReceitaNome
            receitas={receitas}
            setReceitas={setReceitas}
            validaYtb={validaYtb}
            isShown={isShown}
            setIsShown={setIsShown}
            onMoreClick={onMoreClick}
            receitaNome={receitaNome}
            setReceitaNome={setReceitaNome}
            receitaIngrediente={receitaIngrediente}
            setReceitaIngrediente={setReceitaIngrediente}
            receitaPrimeiraLetra={receitaPrimeiraLetra}
            setReceitaPrimeiraLetra={setReceitaPrimeiraLetra}
          />
        </div>
      </div>
    </>
  );
}
