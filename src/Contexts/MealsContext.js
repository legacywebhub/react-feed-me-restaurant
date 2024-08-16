import React, { createContext, useState, useEffect } from 'react';
import mealsData from '../Assets/Data/Data'

export const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
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

  return (
    <MealsContext.Provider value={meals}>
      {children}
    </MealsContext.Provider>
  );
};
