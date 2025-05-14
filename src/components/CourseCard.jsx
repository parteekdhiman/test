import React from "react";
import coursecontent from "./Coursecontent";
function CourseCard() {
  const flagshipCourses = coursecontent.filter(
    (course) => course.name && course.flag === "flag"
  );
  const placementCourses = coursecontent.filter(
    (course) =>
      course.name && course.palcement === "Placement-Assistance-Programs"
  );
  const shortTermCourses = coursecontent.filter(
    (course) => course.name && course.palcement === "shot"
  );

  return (
    <>
      <section className="ji gp uq">
        {/* Section Title Start */}
        <div
          x-data={`{ sectionTitle: 'Latest Blogs & News', sectionTitleText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.' }`}
        >
          <div className="animate_top bb ze rj ki xn vq">
            <h2
              x-text="sectionTitle"
              className="fk vj pr kk wm on/5 gq/2 bb _b"
            ></h2>
            <p className="bb on/5 wo/5 hq" x-text="sectionTitleText"></p>
          </div>
        </div>
        {/* Section Title End */}

        <div className="bb ye ki xn vq jb jo">
          <div className="wc qf pn xo zf iq">
            {flagshipCourses.length > 0 &&
              flagshipCourses.map((v, i) => {
                return (
                  <div className="animate_top sg vk rm xm">
                    <div className="c rc i z-1 pg">
                      <img
                        className="w-full"
                        src="images/blog-01.png"
                        alt="Blog"
                      />
                      <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                        <a
                          href="./blog-single.html"
                          className="vc ek rg lk gh sl ml il gi hi"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="yh">
                      <div className="tc uf wf ag jq">
                        <div className="tc wf ag">
                          <img src="images/icon-man.svg" alt="User" />
                          <p>Musharof Chy</p>
                        </div>
                        <div className="tc wf ag">
                          <img src="images/icon-calender.svg" alt="Calender" />
                          <p>25 Dec, 2025</p>
                        </div>
                      </div>
                      <h4 className="ek tj ml il kk wm xl eq lb">
                        <a href="blog-single.html">
                          Free advertising for your online business
                        </a>
                      </h4>
                    </div>
                  </div>
                );
              })}

            {/* Blog Item */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg">
                <img className="w-full" src="images/blog-01.png" alt="Blog" />
                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="yh">
                <div className="tc uf wf ag jq">
                  <div className="tc wf ag">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div>
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">
                    Free advertising for your online business
                  </a>
                </h4>
              </div>
            </div>

            {/* Blog Item */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg">
                <img className="w-full" src="images/blog-02.png" alt="Blog" />
                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="yh">
                <div className="tc uf wf ag jq">
                  <div className="tc wf ag">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div>
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">
                    9 simple ways to improve your design skills
                  </a>
                </h4>
              </div>
            </div>

            {/* Blog Item */}
            <div className="animate_top sg vk rm xm">
              <div className="c rc i z-1 pg">
                <img className="w-full" src="images/blog-03.png" alt="Blog" />
                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a
                    href="./blog-single.html"
                    className="vc ek rg lk gh sl ml il gi hi"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="yh">
                <div className="tc uf wf ag jq">
                  <div className="tc wf ag">
                    <img src="images/icon-man.svg" alt="User" />
                    <p>Musharof Chy</p>
                  </div>
                  <div className="tc wf ag">
                    <img src="images/icon-calender.svg" alt="Calender" />
                    <p>25 Dec, 2025</p>
                  </div>
                </div>
                <h4 className="ek tj ml il kk wm xl eq lb">
                  <a href="blog-single.html">
                    Tips to quickly improve your coding speed.
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseCard;
