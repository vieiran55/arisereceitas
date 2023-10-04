import { IReceita } from "../../interfaces/IReceita";
import estilos from "./ReceitaNome.module.scss";
import Itens from "./Itens";
import ItensPrimeiraLetra from "./ItensPrimeiraLetra";
import ItensIngredientes from "./ItensIngredientes";

interface Props {
  receitas: IReceita[];
  setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>;
  validaYtb: boolean;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  onMoreClick: (nome: string) => void;
  receitaNome: boolean;
  setReceitaNome: React.Dispatch<React.SetStateAction<boolean>>;
  receitaIngrediente: boolean;
  setReceitaIngrediente: React.Dispatch<React.SetStateAction<boolean>>;
  receitaPrimeiraLetra: boolean;
  setReceitaPrimeiraLetra: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReceitaNome(props: Props) {
  const {
    receitas,
    setReceitas,
    validaYtb,
    isShown,
    setIsShown,
    onMoreClick,
    receitaNome,
    setReceitaNome,
    receitaIngrediente,
    setReceitaIngrediente,
    receitaPrimeiraLetra,
    setReceitaPrimeiraLetra,
  } = props;
  return (
    <>
      {receitaNome &&
        <div className={estilos.ReceitaNome}>
          {receitas !== null ? (
            receitas.map((item, index) => (
              <Itens
                key={index}
                {...item}
                validaYtb={validaYtb}
                isShown={isShown}
                setIsShown={setIsShown}
                onMoreClick={onMoreClick}
              />
            ))
          ) : (
            <div>No Results.</div>
          )}
        </div>
      }
      {
        receitaPrimeiraLetra &&
        <div className={estilos.ReceitaNome}>
          {receitas !== null ? (
            receitas.map((item, index) => (
              <ItensPrimeiraLetra
                key={index}
                {...item}
                validaYtb={validaYtb}
                isShown={isShown}
                setIsShown={setIsShown}
                onMoreClick={onMoreClick}
              />
            ))
          ) : (
            <div>No Results.</div>
          )}
        </div>
      }
      {
        receitaIngrediente &&
        <div className={estilos.ReceitaNome}>
          {receitas !== null ? (
            receitas.map((item, index) => (
              <ItensIngredientes
                key={index}
                {...item}
                validaYtb={validaYtb}
                isShown={isShown}
                setIsShown={setIsShown}
                onMoreClick={onMoreClick}
              />
            ))
          ) : (
            <div>No Results.</div>
          )}
        </div>
      }
    </>
  );
}
