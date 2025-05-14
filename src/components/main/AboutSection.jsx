import React from "react";
import shape05 from "../images/shape-05.svg";
import shape06 from "../images/shape-06.svg";
import shape07 from "../images/shape-07.svg";
import about01 from "../images/about-01.png";
import about02 from "../images/about-02.png";
import about03 from "../images/about-03.png";
import iconPlay from "../images/icon-play.svg";

const AboutSection = () => {
  return (
    <section className="ji gp uq 2xl:ud-py-35 pg">
      <div className="bb ze ki xn wq">
        <div className="tc wf gg qq">
          {/* About Images */}
          <div className="animate_left xc gn gg jn/2 i">
            <div>
              <img src={shape05} alt="Shape" className="h -ud-left-5 x" />
              <img src={about01} alt="About" className="ib" />
              <img src={about02} alt="About" />
            </div>
            <div>
              <img src={shape06} alt="Shape" />
              <img src={about03} alt="About" className="ob gb" />
              <img src={shape07} alt="Shape" className="bb" />
            </div>
          </div>

          {/* About Content */}
          <div className="animate_right jn/2">
            <h4 className="ek yj mk gb">Why Choose Us</h4>
            <h2 className="fk vj zp pr kk wm qb">
              We Make Our Student happy by giving Best Education.
            </h2>
            <p className="uo">
              We are in the field of rich tech education, committed to equipping students with cutting-edge technological skills and knowledge. Our programs blend theory with hands-on experience, preparing learners for real-world challenges. With expert mentors and modern tools, we empower students to innovate, build, and excel in today’s fast-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
