import{Link} from 'react-scroll'; 
import React, { useState } from 'react';
import './fonts.css';


function Header() {

const [click, setClick] = useState(false);
const closeMenu = () => setClick(false);

  return (
    //change it so there is no hover text just a pink line shows up under each word when hovered over and the text of ecah word is green
    <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-6">
      <nav>
        <ul className="flex justify-center list-none w-full max-w-6xl mx-auto space-x-8">
          <li>
            <Link to="AboutMe" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="!text-[#2E7C67] !font-bold !font-space-grotesk hover:border-b-2 hover:border-[#D4A5A5] pb-1 transition-all duration-200">Me</Link>
          </li>
          <li>
            <Link to="Portfolios" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="!text-[#2E7C67] !font-bold !font-space-grotesk hover:border-b-2 hover:border-[#D4A5A5] pb-1 transition-all duration-200">Portfolios</Link>
          </li>
          <li>
            <Link to="ResumeFilter" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="!text-[#2E7C67] !font-bold !font-space-grotesk hover:border-b-2 hover:border-[#D4A5A5] pb-1 transition-all duration-200">Experience</Link>
          </li>
          <li>
          <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className="!text-[#2E7C67] !font-bold !font-space-grotesk hover:border-b-2 hover:border-[#D4A5A5] pb-1 transition-all duration-200">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
