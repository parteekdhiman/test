import React from "react";
import icon04 from "../images/icon-04.svg";
import icon05 from "../images/icon-05.svg";
import icon06 from "../images/icon-06.svg";
import icon08 from "../images/icon-08.svg";
import icon09 from "../images/icon-09.svg";
import icon10 from "../images/icon-10.svg";
import icon11 from "../images/icon-11.svg";
import icon12 from "../images/icon-12.svg";

const ServicesSection = () => {
  // Section title data (replaces Alpine.js x-data)
  const sectionTitle = "We Are into";
  const sectionTitleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.";

  // Service items data
  const serviceItems = [
    {
      id: 1,
      icon: icon04,
      title: "Training",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 2,
      icon: icon05,
      title: "School Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 3,
      icon: icon06,
      title: "Study Abroad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 4,
      icon: icon11,
      title: "Newus Recruiters",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 5,
      icon: icon10,
      title: "Higher Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 6,
      icon: icon08,
      title: "Software and Mobile Application Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 7,
      icon: icon09,
      title: "Digital Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
    {
      id: 8,
      icon: icon12,
      title: "Lets Speak",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    },
  ];

  return (
    <section className="lj tp kr">
      {/* Section Title Start */}
      <div>
        <div className="fade-up bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
          {/* <p className="bb on/5 wo/5 hq">{sectionTitleText}</p> */}
        </div>
      </div>
      {/* Section Title End */}

      <div className="bb ze ki xn yq mb en">
        <div className="wc qf pn xo ng">
          {/* Map through service items */}
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="fade-up sg oi pi zq ml il am cn _m"
            >
              <img src={item.icon} alt="Icon" />
              <h4 className="ek zj kk wm nb _b">{item.title}</h4>
              {/* <p>{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
