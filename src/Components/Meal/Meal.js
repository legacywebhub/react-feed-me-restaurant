import React from 'react'
import './Meal.css'
import MealImg from '../../Assets/Images/meal_img.jpg'

const Meal = ({mealId, mealName, mealType}) => {
  return (
    <div className='meal'>
      <div className='meal__img'>
        <img src={MealImg} alt="meal" />
      </div>
      <div className='meal__info'>
        <div className='meal__type'>{mealType}</div>
        <div className='meal__name'><a href={`/meal/${mealId}`}>{mealName}</a></div>
      </div>
    </div>
  )
}

export default Meal