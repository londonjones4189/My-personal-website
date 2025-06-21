import { Link } from 'react-router-dom';
import Card from './Card'; // make sure you import Card here!

function PortfolioTemp({ title, subtitle, backLink, cardData, type }) {
  return (
    <div className="relative min-h-screen">
      {/* Back Button */}
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
          to={backLink}
          className="bg-[#2E7C67]/[0.17] !text-[#2E7C67] px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 inline-block"
        >
          Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-screen flex flex-col items-center pt-24">
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] mb-8">
            {title}
          </h1>
          <div className="p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-[#2E7C67]">
              {subtitle}
            </h3>
          </div>
        </div>

        {/* Card List */}
        <div className="flex flex-row justify-center gap-6 flex-wrap">
          {cardData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              hl={card.hl}
              sh={card.sh}
              tags={card.tags}
              type={type} // pass type to Card
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioTemp;
