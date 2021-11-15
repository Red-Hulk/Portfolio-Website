import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Mijn Diensten</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Websites</h3>
              <p>
                Websites bouwen met HTML/CSS &amp; Javascript
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Back-end Technologieën</h3>
              <p>
                Programmeren in C# en Java 
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faAndroid} size="2x" />
              </div>
              <h3>Android</h3>
              <p>
                Android applicaties bouwen met Java
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Angular</h3>
              <p>
                Basiskennis van Angular
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
