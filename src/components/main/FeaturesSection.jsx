import React from "react";
import icon01 from "../images/icon-01.svg";
import icon02 from "../images/icon-02.svg";
import icon03 from "../images/icon-03.svg";

const FeaturesSection = () => {
  const featureItems = [
    {
      id: 1,
      icon: icon01,
      title: "Online Learning",
      colorClass: "mh",
    },
    {
      id: 2,
      icon: icon02,
      title: "ISO Certification",
      colorClass: "nh",
    },
    {
      id: 3,
      icon: icon03,
      title: "Career Mentoring",
      colorClass: "oh",
    },
  ];

  return (
    <section id="features">
      <div className="bb ze ki yn 2xl:ud-px-12.5">
        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
          Skills. Standards. Success.
        </h2>
        <div className="tc uf zo xf ap zf bp mq">
          {featureItems.map((item) => (
            <div key={item.id} className="fade-up kn to/3 tc cg oq">
              <div className={`tc wf xf cf ae cd rg ${item.colorClass}`}>
                <img src={item.icon} alt="Icon" />
              </div>
              <div className="tc items-center">
                <h4 className="ek yj go kk wm xb">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
