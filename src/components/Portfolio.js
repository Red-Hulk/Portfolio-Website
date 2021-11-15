import React from "react";
import Angular from "../images/Angular_project.png";
import School from "../images/Android_school_opdracht.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
// Import css files
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
      <p className="porfolio-heading">Angular Applicatie</p>
      <img className="portfolio-image-popupbox" src={Angular} alt="Angular" />
      <p>Een Angular applicatie nagebouwd om goed de basis onder de knee te krijgen.</p>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Red-Hulk/Angular_learn_project", "_blank")}>https://github.com/Red-Hulk/Angular_learn_project</a>
    </>
    )
    
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true, 
      text: ""
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //CityGuide
  const openPopupboxCityGuide = () => {
    const content = (
      <>
      <p className="porfolio-heading">Android Applicatie</p>
      <img className="portfolio-image-popupbox" src={School} alt="Android" />
      <p>Dit is een Android applicatie die ik voor school heb gemaakt met Java met Android Studio</p>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Red-Hulk/AndroidAlliance", "_blank")}>https://github.com/Red-Hulk/AndroidAlliance</a>
    </>
    )
    
    PopupboxManager.open({ content })
  }

  const popupboxConfigCity = {
    titleBar: {
      enable: true,
      text: ""
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projecten</h1>
        {/*  */}
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={Angular} alt="Angular" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={School} alt="Android" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix}/>
      <PopupboxContainer {...popupboxConfigCity}/>
    </div>
  )
}

export default Portfolio;
