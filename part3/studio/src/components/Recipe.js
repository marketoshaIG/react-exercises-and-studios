import React from 'react';

const RecipeAuthor = ({ authorName, authorPhoto, authorLink }) => {
   return (
      <div>
         <img src={authorPhoto} alt="" style={{ objectFit: "contain", borderRadius: "50%" }} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Author's Instagram</a>
         </div>
      </div>
   );
}

const RecipeIngredients = ({ ingredients }) => {
   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient}</li>
            ))}
         </ul>
      </div>
   );
}

const RecipeDescription = ({ recipeName, description, ingredients, authorName, authorPhoto, authorLink }) => {
   return (
      <div>
         <div>
            <h1>{recipeName}</h1>
            <p>{description}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients ingredients={ingredients} />
            <RecipeAuthor
               authorName={authorName}
               authorPhoto={authorPhoto}
               authorLink={authorLink}
            />
         </div>
      </div>
   );
}

const RecipePhoto = ({ recipeImage }) => {
   return (
      <img src={recipeImage} alt="avocado" className="imageUpdates" />
   );
}

export default function RecipeDisplay() {
   const recipeInfo = {
      recipeName: "Avocado toast",
      authorName: "Iryna Ignatenko",
      description: "Quick and easy Avocado Toast with Egg 4 ways – fried, scrambled, boiled and poached. It’s a simple healthy protein-packed breakfast, snack or light meal! Simple to make, tasty and satisfying. If you haven’t had an egg and avocado toast breakfast yet, now is the time!",
      authorLink: "https://www.instagram.com/mybreakfast_idea/",
      authorPhoto: "https://thesaltypot.com/wp-content/uploads/2019/02/Avocado-Toast09.jpg",
      recipeImage: "https://thesaltypot.com/wp-content/uploads/2019/02/Avocado-Toast09.jpg",
      ingredients: [
         "Avocado",
         "Bread",
         "Salt",
         "Lemon",
         "Eggs"
      ]
   };

   return (
      <div className="recipePhotoBlock">
         <RecipePhoto recipeImage={recipeInfo.recipeImage} />
         <div >
            <RecipeDescription 
               recipeName={recipeInfo.recipeName}
               description={recipeInfo.description}
               ingredients={recipeInfo.ingredients}
               authorName={recipeInfo.authorName}
               authorPhoto={recipeInfo.authorPhoto}
               authorLink={recipeInfo.authorLink}
            />
         </div>
      </div>
   );
}
