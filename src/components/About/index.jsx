import React from "react";
import { myself } from "../../assets";
import './index.scss'


export default function About() {
  
  return (
    <div className="about">
      <div className="about_left">
      <h1>About</h1>
      <p>
        Experienced professional in full HR cycle. Experience in management other disciplines: logistics,
        procurement, HSE, accounting. Self starter with strong organizational
        skills,reliable, hard working and dedicated team player who works well
        under pressure and with minimum supervision. Excellent oral & written
        communication skills. Fond of technology and applying it at all places I work as I believe that technology makes work easier. 
      </p>
      </div>
      <div className="about_right">
      <img src={myself} alt="myself" />
      </div>
    </div>
  );
}
