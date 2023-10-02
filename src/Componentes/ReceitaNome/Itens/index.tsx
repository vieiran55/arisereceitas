import { IReceita } from "../../../interfaces/IReceita";

export default function Itens(props: IReceita) {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strYoutube,
    strInstructions,
    strIngredient1,
    strCategory,
  } = props;
  return (
    <>
      <div>
        <li>
          <ol>{idMeal}</ol>
          <ol>{strMeal}</ol>
          <ol>{strMealThumb}</ol>
          <ol>{strYoutube}</ol>
          <ol>{strIngredient1}</ol>
          <ol>{strCategory}</ol>
        </li>
      </div>
    </>
  );
}
