import {Routes, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolios from './Portfolios';
import Ttl from './Ttl';
import ResumeFilter from './ResumeFilter';
import Contact from './Contact';

//threse are no in any seperate fu;ter
import Developer from './Developer';
import Written from './Written';
import Design from './Design';

function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1 px-8 mt-56">
        <section id="AboutMe">
          <AboutMe />
        </section>
        <section id="Ttl" className="mt-12">
          <Ttl />
        </section>
        <section id="Portfolios" className="mt-12">
          <Portfolios />
        </section>
        <section id="ResumeFilter" className="mt-12">
          <ResumeFilter />
        </section>
        <section id="Contact" className="mt-12">
          <Contact />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Developer" element={<Developer />} />
        <Route path="/Written" element={<Written />} />
        <Route path="/Design" element={<Design />} />
        <Route path="*" element={<div>bug</div>} />
      </Routes>
  );
}

export default App;
