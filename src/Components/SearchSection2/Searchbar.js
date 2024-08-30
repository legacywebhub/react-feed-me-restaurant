import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const fetchMeals = (value) => {
        fetch(`https://feedme-api.onrender.com/meals/search/${value}`) // fetch the data from the API
            .then((response) => response.json())
            .then((data) => {
                setSuggestions(data); // set the suggestions to the data from the API
            })
            .catch((error) => console.error('Error:', error)); // catch any errors and log them to the console
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        if (value.length > 2) {
            fetchMeals(value);
        } else {
            setSuggestions([]); // clear the suggestions if the input is less than 3 characters
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchMeals(search);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion.name); // Fill the input with the suggestion
        setSuggestions([]); // Clear the suggestions
        fetchMeals(suggestion.name); // Fetch the meals based on the suggestion
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search for a meal"
            />
            <button type="submit">GO</button>

            {suggestions.length > 0 && (
                <ul className="ul-stlye">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="li-style"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default Searchbar;
