import React, { useState } from "react";
import "./SearchBar.css";
import SearchResults from "../SearchResults/SearchResults";
import mealsData from "../../Assets/Data/Data";


const SearchBar = () => {
    let [search, setSearch] = useState(""),
        [type, setType] = useState("all"),
        [suggestions, setSuggestions] = useState([]),
        [results, setResults] = useState([]);


    const fetchMeals = async (value) => {
        let data = [];

        try {
            // fetch the data from the API
            let response = await fetch(`https://feedme-api.onrender.com/meals/search/${value}`);
            data = await response.json();
        } catch (error) {
            // catch any errors and log them to the console
            console.error('Error:', error); 
            data = mealsData.filter(meal => meal.name.toLowerCase().includes(value.toLowerCase()));
        } finally {
            // set the suggestions to the data from the API
            setSuggestions(data); 
        }
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        if (value.length > 2) {
            fetchMeals(value);
        } else {
            setSuggestions([]); // clear the suggestions if the input is less than 3 characters
        }
    };

    const handleSelectChange = (event) => {
        console.log(event.target.value);
        setType(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(type, search);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion.name); // Fill the input with the suggestion
        setSuggestions([]); // Clear the suggestions
        fetchMeals(suggestion.name); // Fetch the meals based on the suggestion
    };

    const handleSearch = async (type, name) => {
        let data = [];

        // Filter by type
        if (name !== "" || name !== " ") {
            try {
                // fetch the data from the API
                let response = await fetch(`https://feedme-api.onrender.com/meals/search/${name}`);
                data = await response.json();
            } catch (error) {
                // catch any errors and log them to the console
                console.error('Error:', error);
                // use the alternative meal data
                data = mealsData.filter(meal => meal.name.toLowerCase().includes(name.toLowerCase()));
            }
        } else {
            try {
                // fetch the data from the API
                let response = await fetch(`https://feedme-api.onrender.com/meals`);
                data = await response.json();
            } catch (error) {
                // catch any errors and log them to the console
                console.error('Error:', error); 
                // use the alternative meal data
                data = mealsData;
            }
        }

        // Filter by type
        if (type !== "all") {
            console.log(type);
            data = data.filter(meal => meal.type.toLowerCase() === type.toLowerCase());
        }

        // Finally set results
        setResults(data);

        // Hiding the suggestion list
        setSuggestions([]); // Clear the suggestions
    }

    return (
        <>
        <div className="search__div">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search for a meal"
                    required="true"
                />
                <select
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
            <SearchResults searchQuery={search} results={results} />
        )}
        </>
    );
};

export default SearchBar;