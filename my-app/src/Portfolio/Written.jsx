
function Written() {
  return (
    <div className="relative min-h-screen">
      {/* Back Button - copied from PortfolioTemp */}
      <div
        className="absolute z-10"
        style={{
          margin: '0',
          padding: '0',
          top: '20px',
          left: '20px'
        }}
      >
        <a
          href="/Portfolios"
          className="bg-[#2E7C67]/[0.17] !text-[#2E7C67] px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 inline-block"
        >
          Back
        </a>
      </div>

      {/* Main Content */}
      <div className="w-screen flex flex-col items-center pt-24">
        <div className="text-center">
          <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] mb-8">
            Written Portfolio
          </h1>
          <div className="p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-[#2E7C67] mb-4">
              This portfolio is under construction, check it out later!
            </h3>
            {/* Emoji directly under subtitle with minimal spacing */}
            <div className="text-[100px] leading-none">
              👷🏽‍♀️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Written;