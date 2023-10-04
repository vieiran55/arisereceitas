import { Link } from "react-router-dom";
import { IReceita } from "../../../interfaces/IReceita";
import estilos from "./Itens.module.scss";
import { ImYoutube2 } from "react-icons/im";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props extends IReceita {
  validaYtb: boolean;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  onMoreClick: (nome: string) => void;
}

export default function Itens(props: Props) {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strYoutube,
    strInstructions,
    strCategory,
    validaYtb,
    isShown,
    setIsShown,
    onMoreClick,
  } = props;

  const ingredientes = [
    {
      measure: props.strMeasure1,
      ingredient: props.strIngredient1,
    },
    {
      measure: props.strMeasure2,
      ingredient: props.strIngredient2,
    },
    {
      measure: props.strMeasure3,
      ingredient: props.strIngredient3,
    },
    {
      measure: props.strMeasure4,
      ingredient: props.strIngredient4,
    },
    {
      measure: props.strMeasure5,
      ingredient: props.strIngredient5,
    },
    {
      measure: props.strMeasure6,
      ingredient: props.strIngredient6,
    },
    {
      measure: props.strMeasure7,
      ingredient: props.strIngredient7,
    },
    {
      measure: props.strMeasure8,
      ingredient: props.strIngredient8,
    },
    {
      measure: props.strMeasure9,
      ingredient: props.strIngredient9,
    },
    {
      measure: props.strMeasure10,
      ingredient: props.strIngredient10,
    },
    {
      measure: props.strMeasure11,
      ingredient: props.strIngredient11,
    },
    {
      measure: props.strMeasure12,
      ingredient: props.strIngredient12,
    },
    {
      measure: props.strMeasure13,
      ingredient: props.strIngredient13,
    },
    {
      measure: props.strMeasure14,
      ingredient: props.strIngredient14,
    },
    {
      measure: props.strMeasure15,
      ingredient: props.strIngredient15,
    },
    {
      measure: props.strMeasure16,
      ingredient: props.strIngredient16,
    },
    {
      measure: props.strMeasure17,
      ingredient: props.strIngredient17,
    },
    {
      measure: props.strMeasure18,
      ingredient: props.strIngredient18,
    },
    {
      measure: props.strMeasure19,
      ingredient: props.strIngredient19,
    },
    {
      measure: props.strMeasure20,
      ingredient: props.strIngredient20,
    },
    
  ];


  const filtrarIngredientes = ingredientes.filter(
    (item) => item.ingredient !== ""
  );


  const handleMoreClick = () => {
    // Chamamos a função onMoreClick passando o nome da receita
    onMoreClick(strMeal);
    if (!isShown){
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  return (
    <>
      <div className={estilos.item}>
        <div className={estilos.item__imagemConteiner}>
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
            <div className={estilos.item__categoriaConteiner}>
              {validaYtb && (
                <div className={estilos.item__categoriaBotao}>
                  <div className={estilos.item__categoria}>{strCategory}</div>
                  <Link to={strYoutube} className={estilos.item__botao}>
                    <ImYoutube2 className={estilos.item__botao__icon} />
                  </Link>
                </div>
              )}
              {!validaYtb && (
                <div onClick={handleMoreClick}>
                  More... <MdOutlineKeyboardArrowDown />
                </div>
              )}
            </div>
          </div>
        </div>
        <div >
          <h2 className={estilos.item__subtitulo}>Ingredients:</h2>
          <div className={estilos.item__listaConteiner}>
            <ul className={estilos.item__lista}>
              {filtrarIngredientes.map((item, index) => (
                <li key={index}>
                  {item.measure} {item.ingredient}
                </li>
              ))}
            </ul>
          </div>
          <h2 className={estilos.item__subtitulo}>Preparation:</h2>
          <p className={estilos.item__paragrafo}>{strInstructions}</p>
        </div>
      </div>
    </>
  );
}
