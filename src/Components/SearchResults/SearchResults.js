import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchResults.css';
import Title from '../Title/Title';
import Meal from '../Meal/Meal';
import { IoArrowBack } from "react-icons/io5";

const SearchResults = ({ searchQuery, results }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className='search__result-container'>
      <div className="title__container">
        {/* Back Button */}
        <span className="back__button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
        </span>

        {/* Title */}
        <Title title={results.length > 0 ? `Results For ${searchQuery}` : `No Results Found For ${searchQuery}`} />
      </div>

      {/* Results Section */}
      {results.length > 0 ? (
        <div className='results__section'>
          {results.map((meal) => (
            <Meal
              key={meal.id}
              mealId={meal.id}
              mealName={meal.name}
              mealType={meal.type}
            />
          ))}
        </div>
      ) : (
        <p>No meals found matching your search query.</p>
      )}
    </div>
  );
};

export default SearchResults;
