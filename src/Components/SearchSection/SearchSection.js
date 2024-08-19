import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchSection.css';
import mealsData from '../../Assets/Data/Data';

const SearchSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    let results = [];

    try {
      let response = await fetch(`https://feedme-api.onrender.com/meals/search/${query}`);
      results = await response.json();
    } catch (error) {
      console.error('Error fetching meal data:', error);
      results = mealsData.filter(meal => meal.name.toLowerCase().includes(query.toLowerCase()));
    } finally {
      navigate('/result', { state: { searchQuery: query, results: results } });
    }
  };


  return (
    <div className='search__section'>
        <h2>It's the food and groceries you love, delivered</h2>
        <form onSubmit={handleSearch}>
          <input 
          type='text' 
          placeholder='Search meal' 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
          <button type='snbmit'>Go</button>
        </form>
    </div>
  )
}

export default SearchSection