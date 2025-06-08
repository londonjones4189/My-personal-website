
import React from 'react';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white text-black">
      <AboutMe />
    </div>
  );
}

export default App;

/*
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Developer from "./Developer";
import Writer from "./Writer";
import Designer from "./Designer";
import Ttl from "./Ttl";

function App() {
  return (
    <div className="flex min-h-screen">
      <SideBar className="w-64" />
      <div className="flex flex-col flex-1 p-4">
        <Routes>
          <Route path="/" element={
            <>
              <AboutMe />
              <Versions />
              <ResumeFilter />
        
              <Ttl />
            </>
          } />
          <Route path="/Developer" element={<Developer />} />
          <Route path="/Writer" element={<Writer />} />
          <Route path="/Designer" element={<Designer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
*/