import "./Assets/CSS/fonts.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MealPage from "./Pages/MealPage/MealPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/:id" element={<MealPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage  />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
