import './Home.css';
import Ad from "../../Components/Ad/Ad";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleBanner from "../../Components/TitleBanner/TitleBanner";
import SearchSection from "../../Components/SearchSection/SearchSection";
import MealSection from '../../Components/MealSection/MealSection';


function Home() {
  let pageTitle = "WELCOME TO FEED ME",
  pageDescription = `Where you can search and order the best and latest meals from all over the world`;

  return (
    <div>
      <Header />
      <TitleBanner 
      pageTitle={pageTitle} 
      pageDescription={pageDescription}
      />
      <SearchSection />
      <Ad />
      <MealSection />
      <Footer />
    </div>
  );
}

export default Home;
