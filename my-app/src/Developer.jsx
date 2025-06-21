import Card from './Card'; // Make sure path is correct
import { Link } from 'react-router-dom';

function Developer() {
  const cardData = [
    {
      image: 'placeholder.jpeg',
      hl: 'Personal Website',
      sh: 'Everything about me',
      tags: ['React', 'TailwindCSS'],
    },
    {
      image: 'placeholder.jpeg',
      hl: 'Investment Stimulation',
      sh: 'Practice creating portfolios without risk',
      tags: ['AlphaVantage API', 'Java'],
    },
    {
      image: 'placeholder.jpeg',
      hl: 'Summer in Sydney',
      sh: 'Practice creating portfolios without risk',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-6">
      <div className="flex justify-center">
        <Link
          to="/portfolios"
          className="bg-[#2E7C67]/[0.17] !text-[#2E7C67] px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
        >
          Back
        </Link>
      </div>

      <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] text-center">
        Developer Portfolio
      </h1>

      <div className="w-3/4 mx-auto p-6 mt-8 bg-[#2E7C67]/17 rounded-2xl overflow-hidden">
        <h3 className="text-2xl font-bold text-center mt-4 mb-2 text-[#2E7C67]">
          Thank you for visiting my portfolio!
        </h3>
      </div>

      {/* Card List */}
      <div className="flex flex-col justify-center gap-6 mt-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            hl={card.hl}
            sh={card.sh}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Developer;
