import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./MealPage.css";
import mealsData from "../../Assets/Data/Data";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleBanner from "../../Components/TitleBanner/TitleBanner";
import Meal2 from "../../Components/Meal2/Meal2";
import Loading from "../../Components/Loading/Loading";
import NotFound from "../../Components/NotFound/NotFound";
import MealImg from "../../Assets/Images/meal_img.jpg";


const MealPage = () => {
    const { id } = useParams(); // Get the meal ID from the URL
    const [meal, setMeal] = useState(null); // State to store meal data
    const [similarMeals, setSimilarMeals] = useState([]); // State to fetch similar meals
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
      // Function to fetch meal data from API
      const fetchMeal = async () => {
          try {
            const response = await fetch(`https://feedme-api.onrender.com/meals/${id}`);
            const data = await response.json();
            if (!data.error) {
              const similarMeals = mealsData.filter(meal =>
                meal.type === data.type ||
                meal.name.toLowerCase().includes(data.name.toLowerCase())
              );
              // Updating states
              setMeal(data); setSimilarMeals(similarMeals);
            }
          } catch (error) {
            console.error('Error fetching meal data:', error);
            const localData = mealsData.find(meal => meal.id === parseInt(id));
            if (localData) {
              const similarMeals = mealsData.filter(meal =>
                meal.type === localData.type ||
                meal.name.toLowerCase().includes(localData.name.toLowerCase())
              );
              // Updating states
              setMeal(localData); setSimilarMeals(similarMeals);
            }
          } finally {
            setLoading(false); // Set loading to false after fetching
          }
      };

      fetchMeal();
    }, [id]); // Dependency array to trigger useEffect when id changes

    if (loading) {
      return <Loading />; // Show loading message while data is being fetched
    }

    if (meal == null) {
      return <NotFound />; // Show this if meal data is not found
    }

    return (
      <div className="single__item">
        <Header />
        <TitleBanner pageTitle={meal.name} pageDescription="" />
        <section className="single__item__container">
            <div className="single__item__description">
                <div className="single__item__description__left">
                  <img
                    src={MealImg}
                    alt="Classic Pancakes"
                    className="single__item__image"
                  />
                </div>

                <div className="single__item__description__right">
                    <ul className="single__item__ingredients">
                        <h2 className="single__item__type">{meal.type}</h2>
                        {meal.ingredients && meal.ingredients.length > 0 ? (
                            meal.ingredients.map((ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            ))
                        ) : (
                            <li>No ingredients available</li>
                        )}
                    </ul>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </section>
        
        <section className="more__items">
          <h1 className="more__items__title">See similar meals</h1>
          <div className="more__items__catalogue">
            {similarMeals.map(item => (
              <Meal2
              key={item.id}
              mealId={item.id}
              mealName={item.name}
              mealType={item.type}
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default MealPage;