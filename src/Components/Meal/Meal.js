import React from 'react';
import './Meal.css';
import MealImg from '../../Assets/Images/meal_img.jpg';

const Meal = ({ mealId, mealName, mealType }) => {
  return (
    <a href={`/meal/${mealId}`} className='meal'>
      {/* Wrapping the entire card with an anchor tag */}
      <div className='meal__img'>
        <img src={MealImg} alt="meal" />
      </div>
      <div className='meal__info'>
        <div className='meal__type'>{mealType}</div>
        <div className='meal__name'>{mealName}</div>
      </div>
    </a>
  );
};

export default Meal;
