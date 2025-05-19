
//Cards to be used on portfolio pages
function Card({ image, header, description }) {
  return (
    <div className="flex w-72 h-72 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <div className="flex-1 overflow-hidden">
        <img src={image} alt={ProjectImage} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-2">{header}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
}
export default Card;
