import React, { useState } from "react";
import "./SearchBar.css";
import SearchResults from "../SearchResults/SearchResults";
import mealsData from "../../Assets/Data/Data";



const SearchBar = () => {
    // States
    const [mealName, setMealName] = useState("");
    const [mealType, setMealType] = useState("all");
    const [suggestions, setSuggestions] = useState([]);
    const [results, setResults] = useState([]);

    // Functions
    const fetchMeals = async (value) => {
        let suggestions = [];

        try {
             // fetch the data from the API
            let request = await fetch(`https://feedme-api.onrender.com/meals/search/${value}`);
            suggestions = await request.json()
        } catch(error) {
            console.error('Error:', error); // catch any errors and log them to the console
            suggestions = mealsData.filter(meal => meal.name.toLowerCase().includes(mealName.toLowerCase()));
        } finally {
            setSuggestions(suggestions);
        }
        
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setMealName(value);
        if (value.length > 2) {
            fetchMeals(value);
        } else {
            setSuggestions([]); // clear the suggestions if the input is less than 3 characters
        }
    };

    const handleSelectChange = (event) => {
        setMealType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitFunction(mealType, mealName);
    };

    const submitFunction = async (mealType, mealName) => {
        let results = [];
        

        try {
            let response = await fetch(`https://feedme-api.onrender.com/meals/search/${mealName}`);
            results = await response.json();
        } catch (error) {
            results = mealsData.filter(meal => meal.name.toLowerCase().includes(mealName.toLowerCase()));
        }


        // Filtering meal type
        if (mealType !== "all") {
            results = mealsData.filter(meal => meal.type.toLowerCase() === mealType.toLowerCase());
        }

        // Finally
        setResults(results);
        setSuggestions([]);
    }

    const handleSuggestionClick = (suggestion) => {
        setMealName(suggestion.name); // Fill the input with the suggestion
        setSuggestions([]); // Clear the suggestions
        fetchMeals(suggestion.name); // Fetch the meals based on the suggestion
    };

    return (
        <>
            <div className='search__div'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={mealName}
                        onChange={handleInputChange}
                        placeholder="Enter meal name"
                        maxLength="50"
                        required="true"
                    />
                    <select
                        required="true"
                        onChange={handleSelectChange}
                    >
                        <option value="all">All</option>
                        <option value="dessert">Dessert</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <button type="submit">GO</button>

                    {suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="suggestion"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
            {results && results.length > 0 && (
                <SearchResults searchQuery={mealName} results={results} />
            )}
        </>
    );
};

export default SearchBar;
