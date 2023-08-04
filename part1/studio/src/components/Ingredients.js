import styles from './Ingredients.module.css';
import React from 'react';

const ingredients = [
  'Avocado',
  'Bread',
  'Salt',
  'Lemon',
  'Eggs',
];

const RecipeIngredients = () => {
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};


export default RecipeIngredients;