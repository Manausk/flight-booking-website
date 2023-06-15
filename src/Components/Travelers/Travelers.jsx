import React, { useEffect } from "react";
import paris from "../../Assets/paris.jpg";
import india from "../../Assets/india.jpg";
import bali from "../../Assets/bali.jpg";
import japan from "../../Assets/japan.jpg";

import user11 from "../../Assets/user11.jpg";
import user2 from "../../Assets/user2.jpg";
import user3 from "../../Assets/user3.jpg";
import user4 from "../../Assets/user4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: user11,
    travelerName: "Juro Lampston",
    socialLink: "@jurotravels19",
  },
  {
    id: 2,
    destinationImage: bali,
    travelerImage: user2,
    travelerName: "Levis Trunket",
    socialLink: "@levisWanders",
  },
  {
    id: 3,
    destinationImage: india,
    travelerImage: user3,
    travelerName: "Madhav Singh",
    socialLink: "@roamWithSingh",
  },
  {
    id: 4,
    destinationImage: japan,
    travelerImage: user4,
    travelerName: "Arthur Stankovic",
    socialLink: "@Arthur1995",
  },
];

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  key={id}
                  className="singleTraveler"
                >
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
