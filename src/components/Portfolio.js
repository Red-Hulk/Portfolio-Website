import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
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
      <img className="portfolio-image-popupbox" src={netflix} alt="Netflix" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eligendi?</p>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Red-Hulk/Filmsuggestie-Applicatie", "_blank")}>https://github.com/Red-Hulk/Filmsuggestie-Applicatie</a>
    </>
    )
    
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //CityGuide
  const openPopupboxCityGuide = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={cityGuide} alt="CityGuide" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eligendi?</p>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Red-Hulk/Filmsuggestie-Applicatie", "_blank")}>https://github.com/Red-Hulk/Filmsuggestie-Applicatie</a>
    </>
    )
    
    PopupboxManager.open({ content })
  }

  const popupboxConfigCity = {
    titleBar: {
      enable: true,
      text: "CityGuide"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eligendi?</p>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Red-Hulk/Filmsuggestie-Applicatie", "_blank")}>https://github.com/Red-Hulk/Filmsuggestie-Applicatie</a>
    </>
    )
    
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  //taskmanager
  const openPopupboxTaskmanager = () => {
    const content = (
      <>
      <img className="portfolio-image-popupbox" src={taskManager} alt="Portfolio" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, eligendi?</p>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Red-Hulk/Filmsuggestie-Applicatie", "_blank")}>https://github.com/Red-Hulk/Filmsuggestie-Applicatie</a>
    </>
    )
    
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskmanager = {
    titleBar: {
      enable: true,
      text: "Taskmanager"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }



  

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        {/*  */}
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxTaskmanager}>
            <img className="portfolio-image" src={taskManager} alt="Taskmanager" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix}/>
      <PopupboxContainer {...popupboxConfigCity}/>
      <PopupboxContainer {...popupboxConfigPortfolio}/>
      <PopupboxContainer {...popupboxConfigTaskmanager}/>
    </div>
  )
}

export default Portfolio;
