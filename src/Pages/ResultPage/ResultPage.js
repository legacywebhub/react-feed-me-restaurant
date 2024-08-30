import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css';
// import Ad from "../../Components/Ad/Ad";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleBanner from "../../Components/TitleBanner/TitleBanner";
import SearchSection from "../../Components/SearchSection/SearchSection";
import SearchResults from '../../Components/SearchResults/SearchResults';



const ResultPage = () => {
    const location = useLocation();
    const { searchQuery = '', results = [] } = location.state || {};
    const pageTitle = "RESULT PAGE";
    const pageDescription = ``;

  
    return (
      <div>
        <Header />
        <TitleBanner 
        pageTitle={pageTitle} 
        pageDescription={pageDescription}
        />
        <SearchSection />
        {/* <Ad /> */}
        <SearchResults
        searchQuery={searchQuery}
        results={results} />
        <Footer />
      </div>
    );
};

export default ResultPage;
