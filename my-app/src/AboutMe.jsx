import React, { useState, useEffect } from 'react';
import './fonts.css';
import mom from './photos/mom.jpeg';
import lily from './photos/lily.jpeg';
import tape from './photos/tape.png';

function AboutMe() {
  const roles = ['Developer', 'Writer', 'Designer', 'Creative'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    [mom, 'On our way to see Laufey'],
    [lily, 'Me and my BFF']
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(photoInterval);
    };
  }, []);

  return (
      <div className="mx-auto"> {/* Remove all padding, let parent control it */}
        {/* SECTION 1: Full width on top */}
        <div className="mx-auto text-center"> {/* Remove max-w-3xl */}
          <h1 className="text-[36px] font-bold font-space-grotesk text-[#2E7C67]">
            Hello everyone, my name is London and I am a{' '}
            <span className="text-[50px] font-lobster text-[#D4A5A5]">
              {roles[currentRoleIndex]}
            </span>
            .
          </h1>
        </div>
        {/* End of Section 1 */}
        
        {/* Container for Section 2 and Section 3 side by side */}
        <div className="flex flex-col md:flex-row justify-between items-stretch mt-10 gap-4">
          {/* SECTION 2: My Passion (Left) */}
          <div className="w-full md:w-1/2 p-4 text-left flex">
            <div className="p-6 bg-[#2E7C67]/17 rounded-2xl overflow-hidden flex flex-col justify-between w-full">
              <p className="text-lg font-bold font-space-grotesk text-[#2E7C67] mt-4">
                My passion is making my visions come to life. The more I learn, the better I can feed my passion and see them flourish.
                I am a rising Junior at Northeastern with a Combined major in CS and English, minor in Business.
                But more importantly, I live to write and to see the places I can take my writing.
              </p>
              {/* Spacer div to push bottom if not enough content */}
              <div className="mt-auto"></div>
            </div>
          </div>
          {/* End of Section 2 */}
          
          {/* SECTION 3: Polaroid (Right) */}
          <div className="w-full md:w-1/3 mt-10 md:mt-0 relative mx-auto flex">
            {/* Tape on Top */}
            <img
              src={tape}
              alt="Tape"
              className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-24 z-10"
            />
            {/* Polaroid Card */}
            <div className="bg-white shadow-xl rounded-xl p-4 flex flex-col items-center relative z-0 h-full">
              <img
                src={photos[currentPhotoIndex][0]}
                alt="Polaroid"
                className="w-full h-72 object-cover rounded-md"
              />
              <p className="mt-4 text-center text-black font-delicious-handrawn text-lg">
                {photos[currentPhotoIndex][1]}
              </p>
            </div>
          </div>
          {/* End of Section 3 */}
        </div>
      </div>
    );
  }

export default AboutMe;
