import styles from './Description.module.css';
import React from 'react';

const RecipePhoto = () => {
  return (
    <img
      src="https://chukchansigold.com/wp-content/uploads/2019/09/goldfields-wide.jpg"
      alt="recipe photo"
      className={styles.resizingimg}
    />
  );
};

export default RecipePhoto;