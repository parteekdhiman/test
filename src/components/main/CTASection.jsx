import React from 'react';
import bgShape from '../images/shape-16.svg';

const CTASection = () => {
  return (
    <section className="i pg gh ji">
      {/* Bg Shape */}
      <img className="h p q" src={bgShape} alt="Bg Shape" />

      <div className="bb ye i z-10 ki xn dr">
        <div className="tc uf sn tn un gg">
          <div className="animate_left to/2">
            <h2 className="fk vj zp pr lk ac">
              Join with 5000+ Startups Growing with Base.
            </h2>
            <p className="lk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
            </p>
          </div>
          <div className="animate_right bf">
            <a href="#" className="vc ek kk hh rg ol il cm gi hi">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;