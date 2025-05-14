import React, { useState } from "react";
import shape03 from "../images/shape-03.svg";
import shape06 from "../images/shape-06.svg";
import shape07 from "../images/shape-07.svg";
import shape12 from "../images/shape-12.svg";
import shape13 from "../images/shape-13.svg";
const SupportSection = () => {
  // State to replace Alpine.js x-data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Section title data (replaces Alpine.js x-data)
  const sectionTitle = "Let's Stay Connected";
  const sectionTitleText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.";

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    // You might want to add axios or fetch call here to submit the form
  };

  return (
    <section id="support" className="i pg fh rm ji gp uq">
      {/* Bg Shapes */}
      <img src={shape06} alt="Shape" className="h aa y" />
      <img src={shape03} alt="Shape" className="h ca u" />
      <img src={shape07} alt="Shape" className="h w da ee" />
      <img src={shape12} alt="Shape" className="h p s" />
      <img src={shape13} alt="Shape" className="h r q" />

      {/* Section Title Start */}
      <div>
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
          <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
        </div>
      </div>
      {/* Section Title End */}

      <div className="i va bb ye ki xn wq jb mo">
        <div className="tc uf sn tf rn un zf xl:gap-10">
          <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
            {/* Bg Shapes */}
            <img src={shape03} alt="Shape" className="h la x wd" />
            <img src={shape06} alt="Shape" className="h la ma ne kf" />

            <div className="fb">
              <h4 className="wj kk wm cc">Email Address</h4>
              <p>
                <a href="#">newusdharamshala@gmail.com</a>
                <br></br>
                <a href="#">newusdshala@gmail.com</a>
              </p>
            </div>
            <div className="fb">
              <h4 className="wj kk wm cc">Office Location</h4>
              <p>59, Civil Lines, Chilgari, Dharamshala</p>
            </div>
            <div className="fb">
              <h4 className="wj kk wm cc">Phone Number</h4>
              <p>
                <a href="#">86796 86796</a>
              </p>
            </div>

            <span className="rc nd rh tm lc fb"></span>

            <div>
              <h4 className="wj kk wm qb">Social Media</h4>
              <ul className="tc wf fg">
                <li>
                  <a href="#" className="c tc wf xf ie ld rg ml il tl">
                    <svg
                      className="th lm ml il"
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="c tc wf xf ie ld rg ml il tl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_28_2)">
                        <path
                          d="M11.7578 10C11.7578 10.9708 10.9708 11.7578 10 11.7578C9.02922 11.7578 8.24219 10.9708 8.24219 10C8.24219 9.02922 9.02922 8.24219 10 8.24219C10.9708 8.24219 11.7578 9.02922 11.7578 10Z"
                          fill="#79808a"
                        />
                        <path
                          d="M12.9688 4.6875H7.03125C5.73883 4.6875 4.6875 5.73883 4.6875 7.03125V12.9688C4.6875 14.2612 5.73883 15.3125 7.03125 15.3125H12.9688C14.2612 15.3125 15.3125 14.2612 15.3125 12.9688V7.03125C15.3125 5.73883 14.2612 4.6875 12.9688 4.6875ZM10 12.9297C8.38457 12.9297 7.07031 11.6154 7.07031 10C7.07031 8.38457 8.38457 7.07031 10 7.07031C11.6154 7.07031 12.9297 8.38457 12.9297 10C12.9297 11.6154 11.6154 12.9297 10 12.9297ZM13.3594 7.22656C13.0357 7.22656 12.7734 6.96426 12.7734 6.64062C12.7734 6.31699 13.0357 6.05469 13.3594 6.05469C13.683 6.05469 13.9453 6.31699 13.9453 6.64062C13.9453 6.96426 13.683 7.22656 13.3594 7.22656Z"
                          fill="#79808a"
                        />
                        <path
                          d="M14.7266 0H5.27344C2.3657 0 0 2.36574 0 5.27344V14.7266C0 17.6343 2.36574 20 5.27344 20H14.7266C17.6343 20 20 17.6343 20 14.7266V5.27344C20 2.3657 17.6343 0 14.7266 0ZM16.4844 12.9688C16.4844 14.9072 14.9072 16.4844 12.9688 16.4844H7.03125C5.09277 16.4844 3.51562 14.9072 3.51562 12.9688V7.03125C3.51562 5.09277 5.09277 3.51562 7.03125 3.51562H12.9688C14.9072 3.51562 16.4844 5.09277 16.4844 7.03125V12.9688Z"
                          fill="#79808a"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_28_2">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="c tc wf xf ie ld rg ml il tl">
                    <svg
                      className="th lm ml il"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.36198 2.58327C4.36174 3.0695 4.16835 3.53572 3.82436 3.87937C3.48037 4.22301 3.01396 4.41593 2.52773 4.41569C2.0415 4.41545 1.57528 4.22206 1.23164 3.87807C0.887991 3.53408 0.69507 3.06767 0.695313 2.58144C0.695556 2.09521 0.888943 1.62899 1.23293 1.28535C1.57692 0.941701 2.04333 0.748781 2.52956 0.749024C3.01579 0.749267 3.48201 0.942654 3.82566 1.28664C4.1693 1.63063 4.36222 2.09704 4.36198 2.58327ZM4.41698 5.77327H0.750313V17.2499H4.41698V5.77327ZM10.2103 5.77327H6.56198V17.2499H10.1736V11.2274C10.1736 7.87244 14.5461 7.56077 14.5461 11.2274V17.2499H18.167V9.98077C18.167 4.32494 11.6953 4.53577 10.1736 7.31327L10.2103 5.77327Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="c tc wf xf ie ld rg ml il tl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_2)">
                        <path
                          d="M11.8618 8.46864L19.1472 2.13206e-06H17.4208L11.0949 7.3532L6.04243 2.13206e-06H0.215025L7.85533 11.1193L0.215025 20H1.94152L8.6218 12.2348L13.9576 20H19.785L11.8614 8.46864H11.8618ZM9.49713 11.2173L8.72301 10.1101L2.5636 1.29968H5.21539L10.1861 8.40994L10.9602 9.51718L17.4216 18.7594H14.7698L9.49713 11.2177V11.2173Z"
                          fill="#79808A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
            <form onSubmit={handleSubmit}>
              <div className="tc sf yo ap zf ep qb">
                <div className="vd to/2">
                  <label className="rc ac" htmlFor="fullname">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="newus"
                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </div>

                <div className="vd to/2">
                  <label className="rc ac" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="newusdharamshala@gmail.com"
                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="tc sf yo ap zf ep qb">
                <div className="vd to/2">
                  <label className="rc ac" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="86796 86796"
                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="vd to/2">
                  <label className="rc ac" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Type your subject"
                    className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="fb">
                <label className="rc ac" htmlFor="message">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows="4"
                  name="message"
                  id="message"
                  className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="tc xf">
                <button className="vc rg lk gh ml il hi gi _l">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
