import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Software Engineer</h1>
        <Typed
          className="typed-text"
          strings={["C#", "HTML&CSS", "Java", "Android", "Javascript", "Angular"]}
          typeSpeed={80}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" className="btn-main-offer">Contacteer Mij</Link>
      </div>
    </div>
  )
}

export default Header;
