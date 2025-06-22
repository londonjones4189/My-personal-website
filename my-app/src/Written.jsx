import PortfolioTemp from './PortfolioTemp';
import pink from './photos/pinkbg.jpeg';
import green from './photos/greenbg.jpeg';

function Written() {
  const cardData = [
    {
      id: 1,
      image: pink,
      hl: 'Personal Website',
      sh: 'Everything about me',
      tags: ['React', 'TailwindCSS'],
    },
    {
      id: 2,
      image: green,
      hl: 'Investment Stimulation',
      sh: 'Practice creating portfolios without risk',
      tags: ['AlphaVantage API', 'Java'],
    },
    {
      id: 3,
      image: pink,
      hl: 'Summer in Sydney',
      sh: 'Coming soon!',
    },
  ];

  return (
    <>
      <PortfolioTemp
        title="Written Portfolio"
        subtitle="This portfolio is under construction, check it out later!"
        backLink="/Portfolios"
        cardData={[]} // pass empty array instead of null to prevent errors in mapping
        type="Written"
      />

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="!text-[200px] font-bold font-space-grotesk text-[#2E7C67]">
          👷🏽‍♀️
        </h1>
      </div>
    </>
  );
}

export default Written;
