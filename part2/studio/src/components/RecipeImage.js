import recipeData from './recipe.json';

function RecipeImage() {
  const recipeImage = recipeData.map((data) => (
    <img
      key={data.name}
      src={data.recipeImage}
      alt={data.name}
      className="recipeImage"
    />
  ));

  return <div>{recipeImage}</div>;
}
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 