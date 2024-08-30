import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleBanner from "../../Components/TitleBanner/TitleBanner";
import SearchBar from "../../Components/SearchSection2/SearchBar";

function SearchPage() {
  let pageTitle = "SEARCH PAGE",
      pageDescription = "Filter meal by name or type";

  return (
    <div>
      <Header />
      <TitleBanner 
      pageTitle={pageTitle} 
      pageDescription={pageDescription}
      />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default SearchPage;
