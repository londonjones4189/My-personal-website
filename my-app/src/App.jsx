import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolios from './Portfolio/Portfolios';
import Ttl from './Ttl';
import ResumeFilter from './ResumeFilter';
import Contact from './Contact';
import Developer from './Portfolio/Developer';
import Written from './Portfolio/Written';
import Design from './Portfolio/Design';
import DeveloperDetail from './Portfolio/Temps/DeveloperDetail';


function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="px-8 lg:px-16 xl:px-24 mt-0 mx-auto w-full"> {/* Remove max-width, add more responsive padding */}
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
      <Route path="/Developer/:id" element={<DeveloperDetail />} />
      <Route path="/Written" element={<Written />} />
      <Route path="/Design" element={<Design />} />
      <Route path="*" element={<div>bug</div>} />
    </Routes>
  );
}

export default App;
