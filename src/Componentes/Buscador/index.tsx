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

interface Props{
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>
}

export default function Buscador(props: Props) {
  // Constantes
  const {receitas, setReceitas} = props;
  const [pesquisa, setPesquisa] = useState("");
  
  const [tipoBusca, setTipoBusca] = useState("");
  const [url, setUrl] = useState("");
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false);
  const [erroTipoVazio, setErroTipoVazio] = useState(false);

  //Função para selecionar o item menu
  const tipoChange = (event: SelectChangeEvent) => {
    setTipoBusca(event.target.value);
  };

  // useEffect que controla a requição na API
  useEffect(() => {
    console.log(receitas);
    console.log(tipoBusca);
    // condição após o formulario ser corretamente preechido e validado
    if (pesquisaRealizada) {
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
  }, [receitas, tipoBusca, url, pesquisaRealizada]);

  // função para buscar as receitas
  function buscarReceitas() {
    buscarDetalhes();
  }

  // função para validar os dados
  function buscarDetalhes() {
    if (tipoBusca === "nome") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`
      );
      setErroTipoVazio(false);
    } else if (tipoBusca === "primeiraLetra") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${pesquisa}`
      );
      setErroTipoVazio(false);
    } else if (tipoBusca === "ingrediente") {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${pesquisa}`
      );
      setErroTipoVazio(false);
    } else if (tipoBusca === "") {
      setErroTipoVazio(true);
    }
    // define o estado de pesquisa realizada para evitar loop infinito
    setPesquisaRealizada(true);
  }

  return (
    <>
      <div className={estilos.buscador}>
        <FormControl sx={{minWidth: 70, maxWidth: 70}}>
          <InputLabel id="demo-select-small-label" error={erroTipoVazio} sx={{fontSize: 16}}>
            Tipo
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={tipoBusca}
            label="Tipo de Busca"
            onChange={tipoChange}
            error={erroTipoVazio}
          >
            <MenuItem value={"nome"} >Nome</MenuItem>
            <MenuItem value={"ingrediente"} >Ingrediente</MenuItem>
            <MenuItem value={"primeiraLetra"} >Primeira Letra</MenuItem>
          </Select>
        </FormControl>
        <TextField
          error={erroTipoVazio}
          id="outlined-basic"
          label="Que Receita Deseja Buscar?"
          value={pesquisa}
          variant="outlined"
          onChange={(e) => setPesquisa(e.target.value)}
          helperText={erroTipoVazio && "ESCOLHA UM TIPO DE BUSCA"}
          sx={{fontSize: 10}}
        ></TextField>
        <Button onClick={() => buscarReceitas()} variant="outlined" sx={{ maxHeight: 56}}>
          Buscar
        </Button>
      </div>
    </>
  );
}
