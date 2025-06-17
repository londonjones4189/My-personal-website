import React, { useState } from 'react';
import './fonts.css';
import { Link, useNavigate } from 'react-router-dom';

function Portfolios() {
  const portfolios = [['🪴', 'Developer'], ['🌴', 'Written'], ['🌲', 'Design']];
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const navigate = useNavigate();

  const goToPrevious = () => {
    setCurrentPortfolio((prevIndex) =>
      prevIndex === 0 ? portfolios.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentPortfolio((prevIndex) =>
      prevIndex === portfolios.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePortfolioClick = (portfolioType) => {
    switch (portfolioType) {
      case 'Developer':
        navigate('/Developer');
        break;
      case 'Written':
        navigate('/Written');
        break;
      case 'Design':
        navigate('/Design');
        break;
      default:
        console.log('Unknown portfolio type');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-6">
      <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] text-center">
        Portfolios
      </h1>
      <h2 className="text-2xl font-bold font-space-grotesk text-[#2E7C67] text-center">
        Pick your poison
      </h2>
      <div className="w-full text-white px-6 py-8 shadow-md">
        <div className="flex items-center justify-center max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="text-[#2E7C67] hover:text-green-400 transition-colors duration-200 mr-8 p-2"
            aria-label="Previous portfolio"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Portfolio Display */}
          <div className="flex flex-col items-center min-w-[300px]">
            {/* Plant Emoji */}
            <div className="text-8xl mb-6 animate-pulse">
              {portfolios[currentPortfolio][0]}
            </div>

            {/* Portfolio Button */}
            <button
              onClick={() => handlePortfolioClick(portfolios[currentPortfolio][1])}
              className="bg-[#2E7C67] hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View {portfolios[currentPortfolio][1]} Portfolio
            </button>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="text-[#2E7C67] hover:text-green-400 transition-colors duration-200 ml-8 p-2"
            aria-label="Next portfolio"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {portfolios.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPortfolio(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentPortfolio
                  ? 'bg-[#2E7C67] scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to portfolio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolios;