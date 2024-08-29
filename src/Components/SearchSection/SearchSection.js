import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchSection.css';
import mealsData from '../../Assets/Data/Data';

const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        let response = await fetch(`https://feedme-api.onrender.com/meals/search/${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setSuggestions(Array.isArray(data) ? data.slice(0, 10) : []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        const filteredMeals = mealsData.filter(meal =>
          meal.name.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredMeals.slice(0, 10)); // Limit to 10 suggestions
      }
    };

    const debounceTimeout = setTimeout(fetchSuggestions, 300); // Debounce API calls
    return () => clearTimeout(debounceTimeout);

  }, [query]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    let results = [];

    try {
      let response = await fetch(`https://feedme-api.onrender.com/meals/search/${query}`);
      if (!response.ok) throw new Error('Network response was not ok');
      results = await response.json();
    } catch (error) {
      console.error('Error fetching meal data:', error);
      results = mealsData.filter(meal => meal.name.toLowerCase().includes(query.toLowerCase()));
    } finally {
      setLoading(false);
      navigate('/result', { state: { searchQuery: query, results: results } });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name); // Set the query to the selected suggestion
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className='search__section'>
      <h2>It's the food and groceries you love, delivered</h2>
      <form className='search__container' onSubmit={handleSearch}>
        <input 
          type='text' 
          placeholder='Search meal' 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit' disabled={loading || !query.trim()}>Go</button>
        {query && suggestions.length > 0 && ( // Render suggestions only if there is a query and suggestions are available
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default SearchSection;
