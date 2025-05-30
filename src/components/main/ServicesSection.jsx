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
    "“Empowering Education, Innovation & Career Growth”";

  // Service items data
  const serviceItems = [
    {
      id: 1,
      icon: icon04,
      title: "Training",
      description:
        "Offers professional and technical skill development programs for students and professionals.",
    },
    {
      id: 2,
      icon: icon05,
      title: "School Solutions",
      description:
        "Provides tailored educational solutions and digital tools to enhance school learning environments.",
    },
    {
      id: 3,
      icon: icon06,
      title: "Study Abroad",
      description:
        "Assists students with counseling, applications, and visa processes for overseas education",
    },
    {
      id: 4,
      icon: icon11,
      title: "Newus Recruiters",
      description:
        "Recruitment services connecting job seekers with employers across industries.",
    },
    {
      id: 5,
      icon: icon10,
      title: "Higher Education",
      description:
        " Guidance and support for college admissions, courses, and career planning.",
    },
    {
      id: 6,
      icon: icon08,
      title: "Software and Mobile Application Development",
      description:
        "Builds custom software and mobile apps for businesses and educational needs.",
    },
    {
      id: 7,
      icon: icon09,
      title: "Digital Solutions",
      description:
        "Offers web development, digital marketing, and tech-based business tools.",
    },
    {
      id: 8,
      icon: icon12,
      title: "Lets Speak",
      description:
        "Language learning and spoken English programs to improve communication skills.",
    },
  ];

  return (
    <section className="lj tp kr">
      {/* Section Title Start */}
      <div>
        <div className="fade-up bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
          <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
        </div>
      </div>
      {/* Section Title End */}

      <div className="bb ze ki xn yq mb en">
        <div className="wc qf pn xo ng">
          {/* Map through service items */}
          {serviceItems.map((item) => (
            <div key={item.id} className="fade-up sg oi pi zq ml il am cn _m">
              <img src={item.icon} alt="Icon" />
              <h4 className="ek zj kk wm nb _b">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
