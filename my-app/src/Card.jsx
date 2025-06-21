import {Link} from 'react-router-dom'; 


function Card(props) {
  return (
    <Link to={`/Developer/${props.id}`}>
    <div className="flex flex-col w-72 min-h-[300px] border border-gray-300 rounded-lg overflow-hidden shadow-sm p-4">
      {/* Image */}
      <div className="w-full h-36 rounded-lg overflow-hidden mb-4">
        <img src={props.image} className="w-full h-full object-cover" alt="card" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        <h2 className="font-bold text-lg mb-2">{props.hl}</h2>
        <p className="text-sm text-gray-600 mb-2">{props.sh}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {props.tags && props.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card;
