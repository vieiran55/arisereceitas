import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import estilos from "./Buscador.module.scss";
import { IReceita } from "../../interfaces/IReceita";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import classNames from "classnames";

interface Props {
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>;
  validaYtb: boolean;
  setValidaYtb: React.Dispatch<React.SetStateAction<boolean>>;
  pesquisa: string;
  setPesquisa: React.Dispatch<React.SetStateAction<string>>;
  tipoBusca: string;
  setTipoBusca: React.Dispatch<React.SetStateAction<string>>;
  pesquisaRealizada: boolean;
  setPesquisaRealizada: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  validarNull: boolean;
  setValidarNull: React.Dispatch<React.SetStateAction<boolean>>;
  receitaNome: boolean;
  setReceitaNome: React.Dispatch<React.SetStateAction<boolean>>;
  receitaIngrediente: boolean;
  setReceitaIngrediente: React.Dispatch<React.SetStateAction<boolean>>;
  receitaPrimeiraLetra: boolean;
  setReceitaPrimeiraLetra: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Buscador(props: Props) {
  // Constantes
  const {
    receitas,
    setReceitas,
    validaYtb,
    setValidaYtb,
    pesquisa,
    setPesquisa,
    tipoBusca,
    setTipoBusca,
    pesquisaRealizada,
    setPesquisaRealizada,
    isShown,
    setIsShown,
    validarNull,
    setValidarNull,
    receitaNome,
    setReceitaNome,
    receitaIngrediente,
    setReceitaIngrediente,
    receitaPrimeiraLetra,
    setReceitaPrimeiraLetra,
  } = props;

  const [url, setUrl] = useState("");

  const [erroTipoVazio, setErroTipoVazio] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textoPlaceHolder, setTextoPlaceHolder] = useState("Search for a Recipe");
  const [primeiraBusca, setPrimeiraBusca] = useState(false);

  // useEffect que controla a requisição na API
  useEffect(() => {
    if (pesquisaRealizada) {
      // axio com URL após validação no if
      axios
        .get(url)
        .then((resposta) => {
          setReceitas(resposta.data.meals);
        })
        .catch((erro) => {
          console.error("Erro na requisição da API:", erro);

          // Lida com o erro de forma adequada, como exibir uma mensagem de erro ao usuário
        })
        .finally(() => {
          setIsLoading(false); // Define isLoading como false após a busca ser concluída
        });
      // reseta o estado de pesquisa realizada para evitar loop infinito
      setPesquisaRealizada(false);
    }
    setTimeout(() => setPesquisa(""), 1000);
  }, [
    receitas,
    tipoBusca,
    url,
    pesquisaRealizada,
    tipoBusca,
    receitaNome,
    receitaIngrediente,
    receitaPrimeiraLetra,
  ]);

  useEffect(() => {
    if (isShown && primeiraBusca) {
      buscarReceitas();
      setIsShown(false);
    } else if (isShown) {
      setPrimeiraBusca(true);
      setIsShown(false);
    }
  }, [receitas, isShown, primeiraBusca]);

  // função para buscar as receitas
  function buscarReceitas() {
    if (tipoBusca === "nome") {
      if (pesquisa.trim().length < 3) {
        setPesquisa("");
        setTextoPlaceHolder("Invalid Input");
        setErroTipoVazio(true);
        return; // Impede a busca se a pesquisa for muito curta
      }
    }
  
    if (pesquisa.trim() === "") {
      setTextoPlaceHolder("Invalid Input");
      setErroTipoVazio(true);
      return; // Impede a busca se o campo estiver vazio
    }
  
    setTextoPlaceHolder("Search for a Recipe");
    setErroTipoVazio(false);
    setIsLoading(true);
    buscarDetalhes();
  }

  const teclarEnter = (event: any) => {
    if (event.key === "Enter") {
      buscarReceitas();
    }
  };

  // função para validar os dados
  function buscarDetalhes() {
    if (tipoBusca === "nome") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`
      );
      setReceitaIngrediente(false);
      setReceitaPrimeiraLetra(false);
      setReceitaNome(true);
    } else if (tipoBusca === "primeiraLetra") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${pesquisa}`
      );
      setReceitaNome(false);
      setReceitaIngrediente(false);
      setReceitaPrimeiraLetra(true);
    } else if (tipoBusca === "ingrediente") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${pesquisa}`
      );
      setReceitaNome(false);
      setReceitaPrimeiraLetra(false);
      setReceitaIngrediente(true);
    } else if (tipoBusca === "") {
      setErroTipoVazio(true);
    } else if (pesquisa === "") {
      alert("insira para buscar");
    }

    // define o estado de pesquisa realizada para evitar loop infinito
    setPesquisaRealizada(true);
  }

  return (
    <>
      <div className={estilos.buscador}>
        <select
          value={tipoBusca}
          onChange={(e) => setTipoBusca(e.target.value)}
          className={estilos.selecionarTipo}
        >
          <optgroup className={estilos.selecionarTipo__menu}>
            <option value="" disabled>
            Category
            </option>
            <option value="nome">Name</option>
            <option value="primeiraLetra">First Letter</option>
            <option value="ingrediente">Ingredient</option>
          </optgroup>
        </select>
        <div className={estilos.busca}>
          <input
            onKeyDown={teclarEnter}
            className={classNames({[estilos.busca__inputTexto] : !erroTipoVazio,
              [estilos.busca__inputTextoError] : erroTipoVazio})}
            type="text"
            onChange={(e) => setPesquisa(e.target.value)}
            value={pesquisa}
            placeholder={textoPlaceHolder}
          />
          <BiSearchAlt
            className={`${estilos.busca__iconLupa} ${
              isLoading ? estilos.busca__hideIcon : ""
            }`}
            onClick={() => buscarReceitas()}
          />
          <AiOutlineLoading3Quarters
            className={`${estilos.busca__iconLoad} ${
              isLoading ? "" : estilos.busca__hideIcon
            }`}
          />
        </div>
      </div>
    </>
  );
}
