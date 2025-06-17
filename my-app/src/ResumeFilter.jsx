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
    <div className="resume-filter">
      <div className="resume-filter__button">
        <button onClick={() => setFilter("Paint-brush")}>
            <h1>👩🏾‍🎨
woman artist
Unicode: U+1F469 U+1F3FE U+200D U+1F3A8, UTF-8: F0 9F 91 A9 F0 9F 8F BE E2 80 8D F0 9F 8E A8 </h1>
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
}

export default ResumeFilter;
