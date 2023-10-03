import { IReceita } from "../../interfaces/IReceita";
import estilos from "./ReceitaNome.module.scss";
import Itens from "./Itens";

interface Props {
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>;
  validaYtb: boolean;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  onMoreClick: (nome: string) => void;
}

export default function ReceitaNome(props: Props) {
  const { receitas, setReceitas, validaYtb,isShown, setIsShown, onMoreClick } = props;
  return (
    <>
      <div className={estilos.ReceitaNome}>
        {receitas.map((item, index) => (
          <Itens
            key={index}
            {...item}
            validaYtb={validaYtb}
            isShown={isShown}
            setIsShown={setIsShown}
            onMoreClick={onMoreClick}
          />
        ))}
      </div>
    </>
  );
}
