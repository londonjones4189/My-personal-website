import { useParams } from 'react-router-dom';

function DeveloperDetail() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Developer Project Detail</h1>
      <p>You're viewing project with ID: {id}</p>
      {/* Optionally, fetch real data using this ID */}
    </div>
  );
}

export default DeveloperDetail;

//i want to add the page functionality later but for now I want to have each card naviagte tp the github link
//how would i do that