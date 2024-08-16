import React from 'react'
import './Meal.css'
import MealImg from '../../Assets/Images/meal_img.jpg'

const Meal = ({mealName, mealType}) => {
  return (
    <div className='meal'>
      <div className='meal__info'>
      <div className='meal__type'>{mealType}</div>
        <div className='meal__name'>{mealName}</div>
      </div>
      <div className='meal__img'>
        <img src={MealImg} alt="meal" />
      </div>
    </div>
  )
}

export default Meal