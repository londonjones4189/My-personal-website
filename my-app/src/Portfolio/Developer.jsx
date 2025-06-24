import PortfolioTemp from './Temps/PortfolioTemp';
import pink from '../photos/pinkbg.jpeg';
import green from '../photos/greenbg.jpeg';

function Developer() {
  const cardData = [
    {
      id: 1,
      image: pink,
      hl: 'Personal Website',
      sh: 'Everything about me',
      tags: ['React', 'TailwindCSS'],
      github: 'https://github.com/londonjones4189/My-personal-website',
    },
    {
      id: 2,
      image: green,
      hl: 'Investment Simulation',
      sh: 'Practice creating portfolios without risk',
      tags: ['AlphaVantage API', 'Java'],
      github: 'https://github.com/londonjones4189/Stock-game',
    },
    {
      id: 3,
      image: pink,
      hl: 'Summer in Sydney',
      sh: 'Follow-up service project',
      tags: ['React', 'Tailwindcss'],
      // No GitHub URL
    },
  ];

  return (
    <PortfolioTemp
      title="Developer Portfolio"
      subtitle="Thank you for visiting my portfolio!"
      cardData={cardData}
      type="Developer"
    />
  );
}

export default Developer;
