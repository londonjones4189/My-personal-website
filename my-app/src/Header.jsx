import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full text-white px-6 py-8 shadow-md">
      <nav>
        <ul className="flex justify-between list-none w-full max-w-6xl mx-auto">
          <li>
            <Link to="/AboutMe" className="hover:text-[#2E7C67]">Me</Link>
          </li>
          <li>
            <Link to="/Portfolios" className="hover:text-[#2E7C67]">Portfolios</Link>
          </li>
          <li>
            <Link to="/ResumeFilter" className="hover:text-[#2E7C67]">Experience</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-[#2E7C67]">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
