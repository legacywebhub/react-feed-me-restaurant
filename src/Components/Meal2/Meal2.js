import React from 'react'
import './Meal2.css'
import MealImg from '../../Assets/Images/meal_img.jpg'

const Meal = ({mealId, mealName, mealType}) => {
  return (
    <div key={mealId} className="item">
        <div className="item__info">
            <h2 className="item__name"><a href={`/meal/${mealId}`}>{mealName}</a></h2>
            <p>{mealType}</p>
        </div>
        <img src={MealImg} alt={'MealImage'} className="item__image" />
    </div>
  )
}

export default Meal