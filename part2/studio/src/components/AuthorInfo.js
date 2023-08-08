import recipeData from './recipe.json';
import './styling.css';

function AuthorInfo() {
  const recipeAuthor = recipeData.map((data) => (
    <div key={data.name}>{data.author}</div>
  ));

  const recipeAuthorImage = recipeData.map((data) => (
    <div key={data.name}>
      <img src={data.recipeImage} alt={data.author} className="authorImage" />
    </div>
  ));

  const recipeWebsite = recipeData.map((data) => (
    <a key={data.name} href={data.website}>
      {data.website}
    </a>
  ));

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 