import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    showThumbs={false}
    infiniteLoop={true}
    showStatus={false}
    //autoPlay={true}
    interval={3000}
    >
      <>
        <img src={avatar1} alt="Johnny" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            adipisci ducimus error quia, cumque consequatur inventore eligendi
            dolorum. Facere, quo.
          </p>
        </div>
      </>

      <>
        <img src={avatar2} alt="Johnny" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            adipisci ducimus error quia, cumque consequatur inventore eligendi
            dolorum. Facere, quo.
          </p>
        </div>
      </>

      <>
        <img src={avatar3} alt="Johnny" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            adipisci ducimus error quia, cumque consequatur inventore eligendi
            dolorum. Facere, quo.
          </p>
        </div>
      </>

      <>
        <img src={avatar4} alt="Johnny" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            adipisci ducimus error quia, cumque consequatur inventore eligendi
            dolorum. Facere, quo.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
