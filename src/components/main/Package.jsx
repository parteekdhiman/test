import React from "react";
import company from "../alldata/company";
import Marquee from "react-fast-marquee";
import Tabs from "./Tabs";
import Partner from "./Partner";
function Package() {
  return (
    <div className="slider py-16 bg-[#1c1929]">
      <div className="slider-title">
        <h1 className="fk vj zp pr lk ac rq yn">Our Top Placements</h1>
      </div>

      <div>
        <Marquee speed={50} delay={0}>
          <ul className="image_wrapper flex  mx-2">
            {company.map((com, index) => {
              const { name, Program, Current, Lpa, company } = com;
              const one = Current !== "";
              return (
                <li key={index} className="list-none" style={{marginLeft:".5rem",marginRight:".5rem"}}>
                  <div
                    className="bb ze i va ki qr yn sg rq yn"
                    style={{ backgroundColor: "#221d32" }}
                  >
                    <div className="card-body">
                      <h2 className="card-title lk bold">{name}</h2>
                      <p className="text-white regular">{Program}</p>
                      <h4 className="text-white">{one ? Current : company}</h4>

                      <div className="">
                        <span className="text-white extrabold">{Lpa}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Marquee>
      </div>
      <Tabs />
      <Partner />
    </div>
  );
}

export default Package;
