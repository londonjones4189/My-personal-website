import { experiences } from "./experiences";
import { useState } from "react";


//Resume Filters based on selected icon coridnated to expertise(
//labtop -> developer , brush -> designer, book -> writer)


// Resume Filters based on selected icon 
//(labtop -> developer, brush -> designer, book -> writer)
function ResumeFilter() {
  const [filter, setFilter] = useState("all");

  const filteredExperiences = filter === "all"
    ? experiences
    : experiences.filter((experience) => experience.tags.includes(filter));

  return (
  /*
    <div className="resume-filter">
      <div className="resume-filter__button">
        <button onClick={() => setFilter("Paint-brush")}>
            <img src={PaintBrushIcon} alt="Designer" style={{ width: 24, height: 24 }}/>
        </button>
        <button onClick={() => setFilter("Labtop")}>
            <img src={LaptopIcon} alt="Developer" style={{ width: 24, height: 24 }}/>
        </button>
        <button onClick={() => setFilter("Book")}>
            <img src={BookIcon} alt="Writer" style={{ width: 24, height: 24 }}/>
        </button>
        <button onClick={() => setFilter("all")}>All</button>
      </div>

      <div className="resume-filter__results">
        {filteredExperiences.map((exp, index) => (
          <div key={index} className="resume-item">
            <h3>{exp.title} - {exp.company}</h3>
            <p>{exp.location}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <ul>
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
  */

  <></>
  )
}

export default ResumeFilter;
