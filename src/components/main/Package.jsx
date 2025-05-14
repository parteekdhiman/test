import React from "react";
import company from "../alldata/company";
import Marquee from "react-fast-marquee";
import Tabs from "./Tabs";
import Partner from "./Partner";
function Package() {
  return (
    <div className="slider py-16 bg-[#1c1929]">
      <div className="slider-title">
        <h1 className="md:text-5xl text-2xl bold text-white mb-4">
          Our Top Placements
        </h1>
      </div>

      <div>
        <Marquee speed={50} delay={0}>
          <ul className="image_wrapper flex gap-4 mx-2">
            {company.map((com,index) => {
              const { name, Program, Current, Lpa,company } = com;
              const one = Current !== "";
              return (
                <li key={index} className="list-none">
                  <div className="card w-80 h-50 shadow-xl bg-[#221d32] py-8 rounded-[1rem]">
                    <div className="card-body">
                      <h2 className="card-title text-white bold">{name}</h2>
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
      <Tabs/>
      <Partner/>
    </div>
  );
}

export default Package;
