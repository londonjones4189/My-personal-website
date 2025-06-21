import Card from './Card'; 
import { Link } from 'react-router-dom';
import pink from './photos/pinkbg.jpeg';
import green from './photos/greenbg.jpeg';

function Backup() {
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
    <div className="relative min-h-screen">
      {/* Back button positioned absolutely at top */}
      <div
        className="absolute z-10"
        style={{
          margin: '0',
          padding: '0',
          top: '20px',
          left: '20px'
        }}
      >
        <Link
          to="/portfolios"
          className="bg-[#2E7C67]/[0.17] !text-[#2E7C67] px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 inline-block"
        >
          Back
        </Link>
      </div>

      {/* Container 1 - Centered horizontally but at top */}
      <div className="w-screen flex flex-col items-center pt-24">
        {/* Title section */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] mb-8">
            Developer Portfolio
          </h1>
          <div className="p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-[#2E7C67]">
              Thank you for visiting my portfolio!
            </h3>
          </div>
        </div>

        {/* Card List - Centered in a row */}
        <div className="flex flex-row justify-center gap-6 flex-wrap">
          {cardData.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              hl={card.hl}
              sh={card.sh}
              tags={card.tags}
            />
          ))}
        </div>
      </div>
      {/* End of Container 1 */}
    </div>
  );
}

export default Backup;

