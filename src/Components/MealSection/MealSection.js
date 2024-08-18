import React, { useEffect, useState } from 'react'
import './MealSection.css'
import Title from '../Title/Title'
import Meal from  '../Meal/Meal'
import mealsData from '../../Assets/Data/Data'
import Loading from '../Loading/Loading'


const MealSection = () => {
  const [meals, setMeals] = useState([]); // Start with empty array to indicate no data yet

  useEffect(() => {
    // Fetch data from API and update meals
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://feedme-api.onrender.com/meals');
        const data = await response.json();
        console.log(data); // Log the response to inspect it
        setMeals(Array.isArray(data) ? data : []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching meals data:", error);
        setMeals(mealsData); // Fallback to local data if fetching fails
      }
    };

    fetchMeals();
  }, []);

  if (meals.length < 1) {
    return <Loading />; // Show a loading state while fetching data
  }

  return (
    <>
      <Title title="Our Menu" />
      <div className='meal__section'>
        {meals.map((meal) => (
          <Meal
          key={meal.id}
          mealId={meal.id}
          mealName={meal.name}
          mealType={meal.type}
          />
        ))}
      </div>
    </>
  )
}

export default MealSection