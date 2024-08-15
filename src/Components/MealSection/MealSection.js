import React from 'react'
import './MealSection.css'
import Meal from  '../Meal/Meal'
import mealsData from '../../Assets/Data/Data'


const MealSection = () => {

  return (
    <div className='meal__section'>
      <div className="predefined__image__portrait"></div>
      <div className="predefined__image__landscape"></div>

      {mealsData.map((meal) => (
        <Meal
        key={meal.id}
        mealName={meal.name}
        mealDescription={meal.description}
        mealPrice={meal.price}
        />
      ))}
    </div>
  )
}

export default MealSection