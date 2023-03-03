import React from "react";
import './index.scss'


export default function Header({onAboutClick, onExperienceClick, onProjectsClick, onContactClick}) {


  return (
    
    <div className="header-top">
      <p className="header-top_name">Rustem Usserov</p>
      <div className="header-top_right">
        <p onClick={onAboutClick}>About</p>
        <p onClick={onExperienceClick}>Experience</p>
        <p onClick={onProjectsClick}>Projects</p>
        <p onClick={onContactClick}>Contacts</p>
      </div>
    </div>
   

  );
}
