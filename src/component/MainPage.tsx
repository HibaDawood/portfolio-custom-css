import "/src/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";

export default function MainPage() {
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
    <div>
      {/* Main background */}
      <div className="bg1">
        <div className="mainPage">
          {/* side bar Icon */}
          <div className="sidebar">
            <a href="#home" className="sidebar-link">
              <FontAwesomeIcon icon={faHome} />
            </a>
            <a href="#about" className="sidebar-link">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="/contact" className="sidebar-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="#portfolio" className="sidebar-link" >
              <FontAwesomeIcon icon={faTools} />{" "}
              {/* Use faTools or any other icon */}
            </a>
          </div>

          {/* header text */}

          <div className="container">
            <p className=" message">A Passionate Web developer</p>
            <h1 className="heading">Hello Fellow Tech Enthusiast</h1>
            <p className="message">Exploring the World of Code</p>
            <h2 className="subheading">I Am Hiba</h2>
          </div>

          {/* pic */}
          <div className="profile"></div>
        </div>
      </div>

      {/* skillpage */}
      <div id="skills" className="skill-img">
        <div className="skill-grid-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
