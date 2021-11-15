import React from "react";
import author from "../Tristan.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">over mij</h1>
          <p>
            Ik ben Tristan en ik ben 26 jaar oud. Webdevelopment is mijn passie en daar houd ik mij graag mee bezig.
            Ik vind het leuk om websites, webapps &amp; Android applicaties te bouwen. 
            Daarnaast ben ik ook bezig met back-end programmeren in .Net Core. 
            Ik leer graag de nieuwste technologieën en elke dag probeer ik beter en beter te worden in mijn vak!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
