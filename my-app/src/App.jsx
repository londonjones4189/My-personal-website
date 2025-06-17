import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Ttl from './Ttl';
import ResumeFilter from './ResumeFilter';

function App() {
  return (
    /*
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      <main className="flex-1 px-8 mt-56">
        <AboutMe />
        <div className="mt-12">
          <Ttl />
        </div>
        */
        <div className="mt-12">
          <ResumeFilter />
    </div>
  );
}

export default App;