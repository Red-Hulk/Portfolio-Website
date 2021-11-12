import React from "react";
import author from "../Tristan.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            vel eveniet dolorem soluta voluptate impedit ad commodi ipsam et aut
            minus neque, est velit reiciendis delectus possimus, ab
            reprehenderit molestiae asperiores odit perspiciatis? Nisi veritatis
            animi perspiciatis vitae neque pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
