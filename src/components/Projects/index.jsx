import React from "react";
import { project1, project2 } from "../../assets";
import "./index.scss";

export default function Projects() {
  return (
    <>
      <h1>Projects I’ve Worked On</h1>

      <div className="project_box">
        <img src={project1} alt="project1" />
        <div className="project_box_info">
        <h2>Jumys tap</h2>
        <p>This is the first study project at nfactorial school <br />
        It is done with <span>HTML and CSS.</span></p>
        </div>
      </div>

      <div className="project_box">
        <img src={project2} alt="project2" />
        <div className="project_box_info">
        <h2>To-Do App</h2>
        <p>So far this is the last study project at nfactorial school <br />
        <span>Stack: ReactJS</span> </p>
        </div>
      </div>

    </>
  );
}
