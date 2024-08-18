import React from 'react';
import './Loading.css'; // Add any custom styles here
import loadingGif from '../../Assets/Images/loading.gif'; // Replace with your own loading GIF

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={loadingGif} alt="Loading..." className="loading-gif" />
            <p>Loading, please wait...</p>
        </div>
    );
};

export default Loading;
