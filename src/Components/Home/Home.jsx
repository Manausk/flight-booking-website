import React, { useEffect } from "react";

// import video from "../../assets/video.mp4";
import video from "../../Assets/video7.mp4";
import aeroplane from "../../Assets/TakeOff.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With Us
        </h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        className="homeImages flex"
      >
        <div className="videoDiv">
          {/* <video autoplay src={video} muted loop className="video"></video> */}
          <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <img src={aeroplane} className="plane" />
      </div>
    </div>
  );
};

export default Home;
