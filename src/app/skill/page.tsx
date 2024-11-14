import React from "react";

const page = () => {
  const skills = [
    "HTML",
    "CSS",
    "NEXT.JS",
    "TALWIND CSS",
    "TYPESCRIPT",
    "UI/UX",
    "WebDeveloper",
    "ReactJS",
    "GraphicsDesigner",
  ];

  return (
    <div id="skills" className="skill-img">
      <div className="skill-grid-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
