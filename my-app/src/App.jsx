
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import AboutMe from "./AboutMe";
import Versions from "./Versions";
import ResumeFilter from "./ResumeFilter";
import Developer from "./Developer";
import Writer from "./Writer";
import Designer from "./Designer";

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
