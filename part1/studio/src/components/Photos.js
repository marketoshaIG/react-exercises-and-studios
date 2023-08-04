import styles from './Description.module.css';
import React from 'react';

const RecipePhoto = () => {
  return (
    <img
      src="https://images.food52.com/2ho4yysiYIKNAhFvy-rqoO8eVqE=/2016x1344/filters:format(webp)/ff4b294a-6e2f-4953-b934-f1a9ea04dacb--2014-0408_CP_moroccan-guacamole-toasts-w-fried-egg-009.jpg"
      alt="recipe photo"
      className={styles.resizingimg}
    />
  );
};

export default RecipePhoto;