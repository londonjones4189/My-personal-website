import React, { useState, useEffect } from 'react';
import './fonts.css';
import mom from './photos/mom.jpeg';
import lily from './photos/lily.jpeg';
import tape from './photos/tape.png';
import spike from './photos/spike.jpeg';


function AboutMe() {
  const roles = ['Developer', 'Writer', 'Designer', 'Creative'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  //how to expand vertical images to be hroizonatl so they are all the sma elength
  const photos = [
    [mom, 'On our way to see Laufey'],
    [lily, 'Me and my BFF'],
    [spike, 'My precious baby'],
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
    <div className="mx-auto px-4 md:px-8 lg:px-12 pt-6 py-6">
      
      {/* SECTION 1: Full width on top */}
      <div className="max-w-3xl mx-auto text-center">
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
              I'm a rising junior at Northeastern University, majoring in Computer Science and English with a minor in Business.
              I'm passionate about bringing ideas to life through tech, design, and writing.
              I find so much joy in crafting creative experiences — and hope others feel that same joy when they engage with my work.
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
      
          <div className="bg-white shadow-xl rounded-xl p-4 flex flex-col items-center relative z-0">
          <div className="w-full aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
            <img
              src={photos[currentPhotoIndex][0]}
              alt="Polaroid"
              className="w-full h-full object-cover"
            />
          </div>
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