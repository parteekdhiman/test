import React from "react";
import shape06 from "./images/shape-06.svg";
import shape03 from "./images/shape-03.svg";
import shape17 from "./images/shape-17.svg";
import shape18 from "./images/shape-18.svg";
import error404 from "./images/404.svg";
import { Link } from "react-router-dom";
const Error404Page = () => {
  return (
    <section className="i pg fh rm ej np er fj op fr">
      {/* Bg Shapes */}
      <img src={shape06} alt="Shape" className="h j k" />
      <img src={shape03} alt="Shape" className="h l m" />
      <img src={shape17} alt="Shape" className="h n o" />
      <img src={shape18} alt="Shape" className="h p q" />

      <div className="animate_top bb xe rj">
        <img src={error404} alt="404" className="bb fb" />

        <h2 className="ek tj eo kk wm gb">Sorry, the page can't be found</h2>
        <p className="hb">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Link to="/" className="ek vc rg gh lk ml il _l gi hi">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error404Page;
