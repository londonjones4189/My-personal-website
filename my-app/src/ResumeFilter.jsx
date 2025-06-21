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

      <div className="resume-filter__header">
      <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] text-center">
        Experience
      </h1>
      <h2 className="text-2xl font-bold font-space-grotesk text-[#2E7C67] text-center">
        Click on desired expertise to filter
      </h2>
      <div className="resume-filter__button">
        //when clicked on make it this color text-[#2E7C67], turn off hover over blue ting 
        <button onClick={() => setFilter("Paint-brush")}>
            <h1> 👩🏽‍🎨</h1>
        </button>
        <button onClick={() => setFilter("Labtop")}>
            <h1>👩🏽‍💻</h1>
        </button>
        <button onClick={() => setFilter("Book")}>
            <h1>✍🏽</h1>
        </button>
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
    </div>
  );
}

export default ResumeFilter;
