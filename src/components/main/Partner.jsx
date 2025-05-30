import React from "react";
import partner from "../alldata/partnersdata";
const TrustedByBrands = () => {
  const sectionTitle = "Trusted by Global Brands";
  const sectionTitleText =
    "Join the ranks of industry leaders who rely on our solutions for lasting impact and global reach.";

  return (
    <section className="pj vp mr">
      {/* Section Title */}
      <div>
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr lk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
          <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
        <div className="wc rf qn zf cp kq xf wf">
          {partner.map((brand, index) => (
            <a href={brand.link} className="rc animate_top" key={index}>
              <img
                className="th wl ml il zl om dark:hidden"
                src={brand.img}
                alt={`${brand.name} ${index + 1}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByBrands;
