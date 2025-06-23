import { experiences } from "./experiences";
import { useState } from "react";

function ResumeFilter() {
  const [filter, setFilter] = useState("all");

  const filteredExperiences = filter === "all"
    ? experiences
    : experiences.filter((experience) => experience.tags.includes(filter));

  return (
    <div className="resume-filter p-4">

      <div className="resume-filter__header mb-6">
        <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] text-center">
          Experience
        </h1>
        <h2 className="text-2xl font-bold font-space-grotesk text-[#2E7C67] text-center">
          Click on desired expertise to filter
        </h2>
        
        <div className="resume-filter__button flex justify-center space-x-4 mt-4">
          <button 
            onClick={() => setFilter("Paint-brush")}
            className={`${filter === "Paint-brush" ? "text-[#2E7C67]" : "hover:text-blue-400"} text-3xl`}
          >
            👩🏽‍🎨
          </button>
          <button 
            onClick={() => setFilter("Labtop")}
            className={`${filter === "Labtop" ? "text-[#2E7C67]" : "hover:text-blue-400"} text-3xl`}
          >
            👩🏽‍💻
          </button>
          <button 
            onClick={() => setFilter("Book")}
            className={`${filter === "Book" ? "text-[#2E7C67]" : "hover:text-blue-400"} text-3xl`}
          >
            ✍🏽
          </button>
        </div>
      </div>

      <div className="resume-filter__results flex flex-col gap-4 mx-auto w-full">
  {filteredExperiences.map((exp, index) => (
    <div 
      key={index} 
      className="resume-item bg-[#2E7C67]/[0.17] p-4 rounded-lg font-space-grotesk text-[#2E7C67] w-full"
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-[#D4A5A5] font-bold">{exp.company}</h3>
        <p>{exp.startDate} - {exp.endDate}</p>
      </div>
      <div className="flex justify-between items-start mb-2">
        <p>{exp.title}</p>
        <p>{exp.location}</p>
      </div>
      <ul className="list-disc list-inside space-y-1">
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
