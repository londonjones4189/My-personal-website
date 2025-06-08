
import { Link } from "react-router-dom";

//Creates sidebar component with links to other pages
function SideBar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <ul className="list-none">
        <li className="mb-2">
          <Link to="/Developer" className="block py-2 px-4 hover:bg-gray-700 rounded">Me</Link>
        </li>
        <li className="mb-2">
          <Link to="/Writer" className="block py-2 px-4 hover:bg-gray-700 rounded">Portfolios</Link>
        </li>
        <li className="mb-2">
          <Link to="/Designer" className="block py-2 px-4 hover:bg-gray-700 rounded">Experience</Link>
        </li>
        <li className="mb-2">
          <Link to="/Designer" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
