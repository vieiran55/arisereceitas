import { Link } from "react-router-dom";
import { IReceita } from "../../../interfaces/IReceita";
import estilos from "./ItensIngredientes.module.scss";
import { ImYoutube2 } from "react-icons/im";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props extends IReceita {
  validaYtb: boolean;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  onMoreClick: (nome: string) => void;
}

export default function ItensIngredientes(props: Props) {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strYoutube,
    strInstructions,
    strIngredient1,
    strCategory,
    validaYtb,
    isShown,
    setIsShown,
    onMoreClick,
  } = props;

  const handleMoreClick = () => {
    // Chamamos a função onMoreClick passando o nome da receita
    onMoreClick(strMeal);
    if (!isShown) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  return (
    <>
      <div className={estilos.item}>
        <div className={estilos.item__imagem}>
          <img
            className={estilos.item__imagem__foto}
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className={estilos.item__detalhes}>
          <div className={estilos.item__titulo}>
            <h2>{strMeal}</h2>
          </div>
          <div onClick={handleMoreClick}  className={estilos.item__more}>
            More... <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </>
  );
}

