import React from "react";
import image1 from "../images/"
const TrustedBrands = () => {
  const sectionTitle = "Trusted by Global Brands";
  const sectionTitleText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.";

  return (
    <section className="pj vp mr">
      <div>
        <div className="fade-up bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
          <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
        </div>
      </div>

      <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
        <div className="wc rf qn zf cp kq xf wf">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <a href="#" className="rc fade-up" key={num}>
              <img
                className="tk ml il zl om"
                src={`images/brand-light-0${num}.svg`}
                alt="Clients"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
