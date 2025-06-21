function Card(props) {
  return (
    <div className="flex w-full max-w-md h-40 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-36 h-36 m-4 rounded-lg overflow-hidden">
        <img src={props.image} alt={props.hl} className="w-full h-full object-cover" />
      </div>

      {/* Content on the right */}
      <div className="flex flex-col justify-center flex-1 p-4">
        {/* Header */}
        <h3 className="text-2xl font-bold text-center mt-4 mb-2 text-[#D4A5A5]">{props.hl}</h3>

        {/* Description */}
        <p className="text-2xl font-bold text-center mt-4 mb-2 text-[#2E7C67]">{props.sh}</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {props.tags && props.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;