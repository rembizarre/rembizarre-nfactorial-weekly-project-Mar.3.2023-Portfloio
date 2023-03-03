import "./index.scss";
import React from "react";


export default function Promo() {
  return (

    <div className="promo">
      <h1>Hi, I’m Rustem,<br /> 
      I build things for the web.</h1>
      <p>I’m people management expert trying to become a software developer !</p>
      <button onClick={()=> {window.open("https://drive.google.com/file/d/1IQoxpL0asnyTUqtlspSE2mNdWrR6xGQm/view?usp=sharing", '_blank')}}>Check out my CV</button>
    </div>
  );
}
