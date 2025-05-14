import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Tabs() {
  return (
    <>
      <div className="phoenix-career-service">
        <div className="content-container">
          <div className="top-cack text-white">
            <div className="heading-container">
              <h1 className="heading bold">
                Career assistance from us to support your dream
              </h1>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bottom-cack text-white">
            <div className="cacks">
              <div className="cack flex flex-col justify-start items-center ">
                <div className="cack-title-container flex flex-col justify-start items-center">
                  <LazyLoadImage effect="blur"
                    alt="icon-0"
                    className="icon lazyLoad isLoaded"
                    src="https://newus.in/images/other/interview.png"
                  />{" "}
                  <div className="heading black">Interview preparations</div>
                </div>{" "}
                <div className="sub-heading regular">
                  Take advantage of 1:1 mock interviews with industry
                  professionals.
                </div>
              </div>
              <div className="cack flex flex-col justify-start items-center ">
                <div className="cack-title-container flex flex-col justify-start items-center">
                  <LazyLoadImage effect="blur"
                    alt="icon-1"
                    className="icon lazyLoad isLoaded"
                    src="https://newus.in/images/other/professional.png"
                  />{" "}
                  <div className="heading black">Professional branding</div>
                </div>{" "}
                <div className="sub-heading regular">
                  Enhance your personal brand on your resume and LinkedIn
                  profile.
                </div>
              </div>
              <div className="cack flex flex-col justify-start items-center ">
                <div className="cack-title-container flex flex-col justify-start items-center">
                  <LazyLoadImage effect="blur"
                    alt="icon-2"
                    className="icon lazyLoad isLoaded"
                    src="https://newus.in/images/other/counselling.png"
                  />{" "}
                  <div className="heading black">Career counseling</div>
                </div>{" "}
                <div className="sub-heading regular">
                  Use our career assistance services to figure out your growth
                  trajectory.
                </div>
              </div>
              <div className="cack">
                <div className="cack-title-container flex flex-col justify-start items-center">
                  <LazyLoadImage effect="blur"
                    alt="icon-3"
                    className="icon lazyLoad isLoaded"
                    src="https://newus.in/images/other/communication.png"
                  />{" "}
                  <div className="heading black">Effective communication</div>
                </div>{" "}
                <div className="sub-heading regular">
                  Build the finest communication skills required to crack the
                  interview.
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Tabs;
