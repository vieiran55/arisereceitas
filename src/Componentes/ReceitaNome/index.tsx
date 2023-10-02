import { IReceita } from "../../interfaces/IReceita";
import Itens from "./Itens";

interface Props{
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>
}

export default function ReceitaNome(props: Props){
  const {receitas, setReceitas} = props;
  return(
    <>
      <div>
        {receitas.map((item, index) => (
          <Itens key={index} {...item}/>
        ))}
      </div>
    </>
  );
}