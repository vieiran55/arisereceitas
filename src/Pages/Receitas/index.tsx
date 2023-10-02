
import Buscador from "../../Componentes/Buscador";
import NavBar from "../../Componentes/NavBar";
import ReceitaNome from "../../Componentes/ReceitaNome";
import { IReceita } from "../../interfaces/IReceita";
import estilos from "./Receitas.module.scss";

interface Props{
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>
}

export default function Receitas(props: Props) {
  // Constantes
  const {receitas, setReceitas} = props;

  //Função para selecionar o item menu
  
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Buscador receitas={receitas} setReceitas={setReceitas}/>
      </div>
      <div>
        <ReceitaNome receitas={receitas} setReceitas={setReceitas}/>
      </div>
    </>
  );
}
