import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import estilos from "./Buscador.module.scss";
import { IReceita } from "../../interfaces/IReceita";
import { BiSearchAlt } from "react-icons/bi";

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
  } = props;

  const [url, setUrl] = useState("");

  const [erroTipoVazio, setErroTipoVazio] = useState(false);

  // useEffect que controla a requição na API
  useEffect(() => {
    console.log(receitas);
    console.log(tipoBusca);
    console.log(isShown);
    if (pesquisaRealizada) {
      // condição após o formulario ser corretamente preechido e validado
      // axio com URL após validação no if
      axios
        .get(url)
        .then((resposta) => {
          setReceitas(resposta.data.meals);
        })
        .catch((erro) => {
          console.log(erro);
        });
      // reseta o estado de pesquisa realizada para evitar loop infinito
      setPesquisaRealizada(false);
    }
    setTimeout(() => setPesquisa(""), 1000);
  }, [receitas, tipoBusca, url, pesquisaRealizada]);

  useEffect(() => {
    if (isShown){
      buscarReceitas();
      setIsShown(false);
    }
  }, [receitas, tipoBusca, url, isShown]);

  // função para buscar as receitas
  function buscarReceitas() {
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
      setValidaYtb(true);
    } else if (tipoBusca === "primeiraLetra") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${pesquisa}`
      );
      setValidaYtb(true);
    } else if (tipoBusca === "ingrediente") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${pesquisa}`
      );
      setValidaYtb(false);
    } else if (tipoBusca === "") {
      setErroTipoVazio(true);
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
              Tipo
            </option>
            <option value="nome">Nome</option>
            <option value="primeiraLetra">Primeira Letra</option>
            <option value="ingrediente">Ingrediente</option>
          </optgroup>
        </select>
        <div className={estilos.busca}>
          <input
            onKeyDown={teclarEnter}
            className={estilos.busca__inputTexto}
            type="text"
            onChange={(e) => setPesquisa(e.target.value)}
            value={pesquisa}
            placeholder="Que Receita Deseja Buscar?"
          />
          <BiSearchAlt
            className={estilos.busca__icon}
            onClick={() => buscarReceitas()}
          />
        </div>
        {/* <Button variant="outlined" sx={{ maxHeight: 56 }}>
          Buscar
        </Button> */}
      </div>
    </>
  );
}
