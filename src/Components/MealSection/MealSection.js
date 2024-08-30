import React, { useEffect, useState } from 'react';
import './MealSection.css';
import Title from '../Title/Title';
import Meal from '../Meal/Meal';
import mealsData from '../../Assets/Data/Data';
import Loading from '../Loading/Loading';

const MealSection = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleMealsCount, setVisibleMealsCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://feedme-api.onrender.com/meals');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMeals(Array.isArray(data) ? data : []);
        setFilteredMeals(Array.isArray(data) ? data : []); // Initially show all meals
      } catch (error) {
        console.error('Error fetching meals data:', error);
        setError('Failed to load meals. Showing local data instead.');
        setMeals(mealsData); 
        setFilteredMeals(mealsData); // Fallback to local data
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  // Filter meals based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(meals.filter(meal => meal.type.toLowerCase() === selectedCategory.toLowerCase()));
    }
    setVisibleMealsCount(8); // Reset visible meals count when category changes
  }, [meals, selectedCategory]);

  const handleViewMore = () => {
    setVisibleMealsCount(prevCount => prevCount + 8);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) return <Loading />;

  return (
    <div className='meal__section-container'>
      <Title title="Our Menu" />
      {error && <p className='error'>{error}</p>}

      {/* Filter Buttons */}
      <div className='filter__buttons'>
        {['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((category) => (
          <button
            key={category}
            className={`filter__button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredMeals.length > 0 ? (
        <>
          <div className='meal__section'>
            {filteredMeals.slice(0, visibleMealsCount).map((meal) => (
              <Meal
                key={meal.id}
                mealId={meal.id}
                mealName={meal.name}
                mealType={meal.type}
              />
            ))}
          </div>
          {visibleMealsCount < filteredMeals.length && (
            <button className='view__more__button' onClick={handleViewMore}>
              View More
            </button>
          )}
        </>
      ) : (
        <p>No meals available in this category.</p>
      )}
    </div>
  );
};

export default MealSection;
