import React from 'react';
import './Meal2.css';
import MealImg from '../../Assets/Images/meal_img.jpg';

const Meal = ({ mealId, mealName, mealType }) => {
  return (
    <a href={`/meal/${mealId}`} className="item"> {/* Wrap entire card in <a> tag */}
      <div className="item__info">
        <h2 className="item__name">{mealName}</h2>
        <p>{mealType}</p>
      </div>
      <img src={MealImg} alt="Meal" className="item__image" />
    </a>
  );
}

export default Meal;
