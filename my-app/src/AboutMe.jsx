import React, { useState, useEffect } from 'react';
import './fonts.css';

function AboutMe() {
  const roles = ['Developer', 'Writer', 'Designer', 'Creative'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-6">
      <h1 className="text-[36px] font-bold font-space-grotesk text-[#2E7C67] text-center">
        Hello everyone, my name is London and I am a{' '}
        <span className="text-[50px] font-lobster text-[#D4A5A5]">
          {roles[currentIndex]}
        </span>
        .
      </h1>
      <div className="w-3/4 mx-auto p-6 mt-8 bg-[#2E7C67]/17 rounded-2xl overflow-hidden">
        <h3 className="text-2xl font-bold text-center mt-4 mb-2 text-[#2E7C67]">
          My passion is making my visions come to life. The more I learn, the better I can feed my passion and see them flourish.
          I am a rising Junior at Northeastern with a Combined major in CS and English, minor in Business.
          But more importantly, I live to write and to see the places I can take my writing.
        </h3>
      </div>
    </div>
  );
}

export default AboutMe;