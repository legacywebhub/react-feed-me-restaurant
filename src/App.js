import "./Assets/CSS/fonts.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import Meal from "./Pages/Meal/Meal";
import Search from "./Pages/Search/Search";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
