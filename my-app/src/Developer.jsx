import PortfolioTemp from './PortfolioTemp';
import pink from './photos/pinkbg.jpeg';
import green from './photos/greenbg.jpeg';

function Developer() {
  
  const cardData = [
    {
      id: 1,
      image: pink,
      hl: 'Personal Website',
      sh: 'Everything about me',
      tags: ['React', 'TailwindCSS'],
      github: 'https://github.com/yourusername/personal-website', // example
    },
    {
      id: 2,
      image: green,
      hl: 'Investment Stimulation',
      sh: 'Practice creating portfolios without risk',
      tags: ['AlphaVantage API', 'Java'],
      github: 'https://github.com/yourusername/investment-simulation',
    },
    {
      id: 3,
      image: pink,
      hl: 'Summer in Sydney',
      sh: 'Coming soon!',
      github: '', // No GitHub yet
    },
  ];
  
  return (
    <PortfolioTemp
    title="Developer Portfolio"
    subtitle="Thank you for visiting my portfolio!"
    backLink="/Portfolios"
    cardData={cardData}
    type="Developer" 
  />
  
  );
}

export default Developer;
