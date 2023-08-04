import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
  
    const authorLink = "https://www.instagram.com/mybreakfast_idea/";
    const authorPhoto = "https://images.food52.com/2ho4yysiYIKNAhFvy-rqoO8eVqE=/2016x1344/filters:format(webp)/ff4b294a-6e2f-4953-b934-f1a9ea04dacb--2014-0408_CP_moroccan-guacamole-toasts-w-fried-egg-009.jpg";
    const authorName = "Iryna Ignatenko";

    return ( 
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto}
        height="500"
        width="500"
        alt="Avocado toast"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
}
  //     <div className={styles.recipeAuthorBlock}>
  //       <img src={authorPhoto} alt="Avocado toast" className={styles.imageUpdates} />
  //       <div>
  //         <h3>{authorName}</h3>
  //         <a href={authorLink}>Blog name</a>
  //       </div>
  //     </div>
  //   );
  // }
  class RecipeDescription extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h1>My favorite Avocado toast</h1>
            <p>Quick and easy Avocado Toast with Egg 4 ways – fried, scrambled, boiled and poached. It’s a simple healthy protein-packed breakfast, snack or light meal! Simple to make, tasty and satisfying. If you haven’t had an egg and avocado toast breakfast yet, now is the time!</p>
          </div>
          <RecipeAuthor />
        </div>
      );
    }
  }
  
  export default RecipeDescription;