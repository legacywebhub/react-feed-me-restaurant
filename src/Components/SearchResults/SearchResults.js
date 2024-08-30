import React from 'react'
import './SearchResults.css'
import Title from '../Title/Title'
import Meal from  '../Meal/Meal'


const SearchResults = ({ searchQuery = "", results = [] }) => {

  if (results && results.length === 0) {
    return (
      <>
       <Title title={`No Results Found For ${searchQuery}`} />
      </>
    )
  } else {
    return (
      <>
        <Title title={`Results For ${searchQuery}`} />
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
      </>
    )
  }
}

export default SearchResults