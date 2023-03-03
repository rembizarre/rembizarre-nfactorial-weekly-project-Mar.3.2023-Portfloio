import React from "react";
import { circle } from "../../assets";
import "./index.scss";

export default function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>

      <div className="experience_list">
        <div className="experience_list_box">
          <p className="year">2019 - now</p>
          <div className="experience_list_box_right">
            <div className="experience_list_box_right_title">
              <div className="experience_list_box_right_title_role">
                <img src={circle} alt="circle" />
                <p>General issues Deputy Director at "Ships Catering Supply"</p>
              </div>
              <p>Atyrau, Kazakhstan</p>
            </div>
            <p>
              Achievements: Developed HR dept from scratch. Intergrated CRM
              systems in recruitment process. <br />
              Responsible for all HR strategy. Administrative issues and general
              management of HSE, logistics, office management, accounting etc.{" "}
              <br />
              Branch Director of Atyrau office.
            </p>
          </div>
        </div>

        <div className="experience_list_box">
          <p className="year">2018 - 2019</p>
          <div className="experience_list_box_right">
            <div className="experience_list_box_right_title">
              <div className="experience_list_box_right_title_role">
                <img src={circle} alt="circle" />
                <p>
                  Key account manager at Fircroft Engineering Services
                  Kazakhstan
                </p>
              </div>
              <p>Atyrau, Kazakhstan</p>
            </div>
            <p>Business Development, Sales of manpower services. </p>
          </div>
        </div>

        <div className="experience_list_box">
          <p className="year">2016 - 2018</p>
          <div className="experience_list_box_right">
            <div className="experience_list_box_right_title">
              <div className="experience_list_box_right_title_role">
                <img src={circle} alt="circle" />
                <p>HR Director at Kazakhstan Petrochemical Industries LLP</p>
              </div>
              <p>Atyrau, Kazakhstan</p>
            </div>
            <p>
              Responsible for all recruitment. Participation in the development
              and implementation of the Company's HR strategy. <br /> Advising
              HR and the hiring management on the application of the best HR
              practices.
            </p>
          </div>
        </div>

        <h3>To view full profile please click on "Check out my CV" button</h3>
      </div>
    </div>
  );
}
