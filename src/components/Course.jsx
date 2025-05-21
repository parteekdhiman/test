import React, { createContext, memo } from "react";
import { useParams } from "react-router-dom";
import coursecontent from "./Coursecontent";
import ContactForm from "./Forms/ContactForm";
import bgShape from "../components/images/shape-16.svg";
import Button from "./button/Button";
export const brochure = createContext();
const svgtime = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.1939 16.6535L27.1622 16.6218C26.5768 16.0364 25.6282 16.0361 25.043 16.6216C23.7982 17.8668 21.7939 19.8711 20.9403 20.7248C20.8113 20.8538 20.658 20.9561 20.4894 21.0258C20.3207 21.0955 20.14 21.1312 19.9575 21.1309H17.0472C18.0083 21.1259 18.7861 20.3457 18.7861 19.3834C18.7861 18.418 18.0035 17.6355 17.0381 17.6355H13.2581C12.7924 17.6355 12.3314 17.7289 11.9025 17.9103C11.4736 18.0916 11.0854 18.3572 10.761 18.6913L8.39166 21.1311H7.49951V26.9515H17.2213C18.3292 26.9515 19.3916 26.5115 20.1751 25.7282L27.1939 18.7107C27.7618 18.1424 27.7619 17.2216 27.1939 16.6535Z"
      fill="#FCC4AE"
    />
    <path
      d="M27.2764 16.7448C27.3009 17.1461 27.1612 17.5556 26.8545 17.8624L19.8358 24.8799C19.0524 25.6632 17.9899 26.1032 16.882 26.1032H7.49939V26.9512H17.2211C18.329 26.9512 19.3915 26.5112 20.175 25.7279L27.1937 18.7103C27.7325 18.1717 27.7595 17.3163 27.2764 16.7448ZM17.038 21.1313H14.176C14.1086 21.1313 14.0438 21.1045 13.9961 21.0568C13.9484 21.0091 13.9216 20.9444 13.9216 20.8769C13.9216 20.8094 13.9484 20.7447 13.9961 20.697C14.0438 20.6493 14.1086 20.6225 14.176 20.6225H16.6988C17.6642 20.6225 18.4468 19.8399 18.4468 18.8745C18.4468 18.6265 18.3944 18.3911 18.3014 18.1774C18.6126 18.5017 18.7862 18.9339 18.786 19.3833C18.786 20.3487 18.0034 21.1313 17.038 21.1313Z"
      fill="#F2AD97"
    />
    <path
      d="M16.4476 20.4864H16.8021C17.0508 20.4864 17.2892 20.3877 17.465 20.2119C17.6409 20.036 17.7396 19.7976 17.7396 19.5489V19.2179C17.7396 18.9693 17.6409 18.7308 17.465 18.555C17.2892 18.3792 17.0508 18.2804 16.8021 18.2804H16.4476C16.3855 18.2804 16.3259 18.3051 16.2819 18.349C16.2379 18.393 16.2133 18.4526 16.2133 18.5148V20.2521C16.2133 20.3142 16.2379 20.3738 16.2819 20.4178C16.3259 20.4618 16.3855 20.4864 16.4476 20.4864Z"
      fill="#FFD2C0"
    />
    <path
      d="M6.91341 28.6918H2.96619C2.81079 28.6918 2.66175 28.6301 2.55187 28.5202C2.44198 28.4103 2.38025 28.2613 2.38025 28.1059V19.9763C2.38025 19.8209 2.44198 19.6719 2.55187 19.562C2.66175 19.4521 2.81079 19.3904 2.96619 19.3904H6.91341C7.06881 19.3904 7.21785 19.4521 7.32773 19.562C7.43762 19.6719 7.49935 19.8209 7.49935 19.9763V28.1059C7.49935 28.2613 7.43762 28.4103 7.32773 28.5202C7.21785 28.6301 7.06881 28.6918 6.91341 28.6918Z"
      fill="#478CF7"
    />
    <path
      d="M3.0835 25.8793C3.02134 25.8793 2.96172 25.8546 2.91777 25.8106C2.87381 25.7667 2.84912 25.7071 2.84912 25.6449V21.0746C2.84912 21.0124 2.87381 20.9528 2.91777 20.9089C2.96172 20.8649 3.02134 20.8402 3.0835 20.8402C3.14566 20.8402 3.20527 20.8649 3.24922 20.9089C3.29318 20.9528 3.31787 21.0124 3.31787 21.0746V25.6449C3.31787 25.7071 3.29318 25.7667 3.24922 25.8106C3.20527 25.8546 3.14566 25.8793 3.0835 25.8793ZM3.0835 20.3715C3.02134 20.3715 2.96172 20.3468 2.91777 20.3028C2.87381 20.2589 2.84912 20.1993 2.84912 20.1371V20.0935C2.84912 20.0313 2.87381 19.9717 2.91777 19.9278C2.96172 19.8838 3.02134 19.8591 3.0835 19.8591C3.14566 19.8591 3.20527 19.8838 3.24922 19.9278C3.29318 19.9717 3.31787 20.0313 3.31787 20.0935V20.1371C3.31787 20.1993 3.29318 20.2589 3.24922 20.3028C3.20527 20.3468 3.14566 20.3715 3.0835 20.3715Z"
      fill="#5E9CF7"
    />
    <path
      d="M7.49935 19.9763C7.49935 19.8209 7.43762 19.6719 7.32773 19.562C7.21785 19.4521 7.06881 19.3904 6.91341 19.3904H5.1556V25.7621C5.1556 25.9175 5.09387 26.0665 4.98398 26.1764C4.8741 26.2863 4.72506 26.348 4.56966 26.348H2.38025V28.1059C2.38025 28.2613 2.44198 28.4103 2.55187 28.5202C2.66175 28.6301 2.81079 28.6918 2.96619 28.6918H6.91341C7.06881 28.6918 7.21785 28.6301 7.32773 28.5202C7.43762 28.4103 7.49935 28.2613 7.49935 28.1059V19.9763Z"
      fill="#377DE2"
    />
    <path
      d="M7.49935 19.9763C7.49935 19.8209 7.43762 19.6719 7.32773 19.562C7.21785 19.4521 7.06881 19.3904 6.91341 19.3904H6.32748V26.934C6.32748 27.0894 6.26574 27.2384 6.15586 27.3483C6.04597 27.4582 5.89694 27.5199 5.74154 27.5199H2.38025V28.1059C2.38025 28.2613 2.44198 28.4103 2.55187 28.5202C2.66175 28.6301 2.81079 28.6918 2.96619 28.6918H6.91341C7.06881 28.6918 7.21785 28.6301 7.32773 28.5202C7.43762 28.4103 7.49935 28.2613 7.49935 28.1059V19.9763Z"
      fill="#2266D3"
    />
    <path
      d="M19.6106 11.0585C19.4822 11.1655 19.3797 11.3003 19.3111 11.4528C19.2425 11.6052 19.2095 11.7713 19.2145 11.9384C19.2397 12.7709 18.3692 13.3304 17.6225 12.9616C17.3741 12.8389 17.0886 12.8141 16.8228 12.8922C16.5569 12.9703 16.3302 13.1455 16.1876 13.383C16.1846 13.3878 16.1811 13.3918 16.1782 13.3966L18.3862 16.9693C18.519 17.1841 18.8324 17.1813 18.9612 16.9641L19.8483 15.4693L21.6648 15.3082C21.9139 15.286 22.0525 15.0093 21.921 14.7966L19.6106 11.0585ZM14.2951 13.3829C14.1524 13.1454 13.9257 12.9702 13.6599 12.8922C13.394 12.8141 13.1086 12.8388 12.8601 12.9615C12.1134 13.3303 11.2428 12.7708 11.2682 11.9383C11.2732 11.7712 11.2402 11.6051 11.1716 11.4527C11.1029 11.3002 11.0005 11.1654 10.8721 11.0583L8.56183 14.7963C8.43034 15.009 8.56898 15.2857 8.818 15.3078L10.6345 15.4689L11.5216 16.9638C11.6505 17.1809 11.9638 17.1837 12.0966 16.9689L14.3046 13.3962C14.3016 13.3917 14.298 13.3877 14.2951 13.3829Z"
      fill="#E63950"
    />
    <path
      d="M15.989 1.60075C16.6016 1.0365 17.5945 1.32806 17.8048 2.13396C17.8748 2.40202 18.043 2.63398 18.2761 2.78377C18.5092 2.93356 18.79 2.99024 19.063 2.94255C19.8834 2.79911 20.561 3.58111 20.3022 4.37271C20.2162 4.63607 20.2323 4.92215 20.3474 5.17418C20.4625 5.4262 20.6682 5.62572 20.9236 5.73314C21.6912 6.05599 21.8386 7.08032 21.1928 7.60626C20.978 7.78125 20.8369 8.03064 20.7975 8.30488C20.7581 8.57912 20.8232 8.85816 20.98 9.08657C21.4514 9.77318 21.0214 10.7145 20.1939 10.8081C19.9186 10.8391 19.6651 10.9726 19.4836 11.182C19.3022 11.3914 19.2062 11.6614 19.2146 11.9383C19.2399 12.7708 18.3693 13.3303 17.6226 12.9615C17.3742 12.8388 17.0887 12.814 16.8229 12.8921C16.557 12.9702 16.3303 13.1454 16.1877 13.3829C15.7589 14.0968 14.724 14.0968 14.2952 13.3829C14.1525 13.1454 13.9258 12.9702 13.6599 12.8922C13.3941 12.8141 13.1087 12.8389 12.8602 12.9615C12.1135 13.3303 11.2429 12.7708 11.2682 11.9383C11.2767 11.6614 11.1806 11.3914 10.9992 11.182C10.8178 10.9726 10.5642 10.8391 10.2889 10.8081C9.46133 10.7145 9.03148 9.77329 9.50281 9.08657C9.65957 8.85814 9.7247 8.57912 9.68527 8.30489C9.64585 8.03066 9.50476 7.78129 9.29 7.60626C8.6443 7.08021 8.7916 6.05587 9.5593 5.73314C9.81469 5.62572 10.0203 5.4262 10.1354 5.17418C10.2506 4.92215 10.2667 4.63607 10.1806 4.37271C9.92187 3.58111 10.5996 2.799 11.4199 2.94255C11.6928 2.9903 11.9737 2.93364 12.2068 2.78384C12.4399 2.63404 12.6081 2.40205 12.678 2.13396C12.8882 1.32818 13.8812 1.03661 14.4938 1.60075C14.6975 1.7885 14.9644 1.89273 15.2414 1.89273C15.5184 1.89273 15.7853 1.7885 15.989 1.60075Z"
      fill="#FFC91D"
    />
    <path
      d="M15.2412 12.3187C17.8399 12.3187 19.9466 10.212 19.9466 7.61327C19.9466 5.01453 17.8399 2.90784 15.2412 2.90784C12.6425 2.90784 10.5358 5.01453 10.5358 7.61327C10.5358 10.212 12.6425 12.3187 15.2412 12.3187Z"
      fill="#FFA91A"
    />
    <path
      d="M15.2412 11.6895C17.4924 11.6895 19.3174 9.86449 19.3174 7.61324C19.3174 5.36199 17.4924 3.53699 15.2412 3.53699C12.9899 3.53699 11.1649 5.36199 11.1649 7.61324C11.1649 9.86449 12.9899 11.6895 15.2412 11.6895Z"
      fill="#F79219"
    />
    <path
      d="M15.7956 3.57544C16.5238 4.31173 16.9738 5.32388 16.9738 6.44126C16.9738 8.69255 15.1488 10.5175 12.8976 10.5175C12.7095 10.5175 12.5246 10.5037 12.3433 10.479C13.0821 11.2261 14.1075 11.6894 15.2413 11.6894C17.4926 11.6894 19.3176 9.86442 19.3176 7.61313C19.3174 5.55005 17.7844 3.84603 15.7956 3.57544Z"
      fill="#EF7816"
    />
    <path
      d="M14.562 10.1795C14.3984 10.1794 14.2407 10.1184 14.1197 10.0082L12.1954 8.25446C12.1317 8.19637 12.08 8.12629 12.0434 8.04822C12.0067 7.97016 11.9858 7.88564 11.9818 7.79948C11.9778 7.71333 11.9908 7.62724 12.0201 7.54612C12.0494 7.46499 12.0943 7.39043 12.1524 7.32669C12.2105 7.26295 12.2806 7.21127 12.3587 7.17461C12.4367 7.13795 12.5213 7.11703 12.6074 7.11304C12.6936 7.10904 12.7797 7.12206 12.8608 7.15134C12.9419 7.18062 13.0165 7.22559 13.0802 7.28368L14.4733 8.55329L16.7839 5.50794C16.8892 5.36918 17.0453 5.27793 17.2179 5.25426C17.3904 5.23059 17.5653 5.27645 17.7041 5.38173C17.8428 5.48701 17.9341 5.64311 17.9577 5.81567C17.9814 5.98823 17.9356 6.16313 17.8303 6.30189L15.0854 9.91982C15.0241 10.0006 14.945 10.0661 14.8542 10.1111C14.7634 10.1562 14.6634 10.1796 14.562 10.1795Z"
      fill="white"
    />
  </svg>
);
const courseNames = {
  "Data-Science": "Data-Science",
  "DIGITAL-MARKETING": "DIGITAL-MARKETING",
  "Advance-Digital-Marketing-with-AI-Tools":
    "Advance-Digital-Marketing-with-AI-Tools",
  "DATA-STRUCTURES-and-ALGORITHMS": "DATA-STRUCTURES-and-ALGORITHMS",
  "Machine-Learning": "Machine-Learning",
  "Artificial-Intelligence": "Artificial-Intelligence",
  "CYBER-SECURITY": "CYBER-SECURITY",
  "Coding-for-Juniors": "Coding-for-Juniors",
  "Programming-in-C++": "Programming-in-C++",
  "Core-java": "Core-java",
  "DATA-ANALYST": "DATA-ANALYST",
  "Core-Python": "Core-Python",
  AutoCAD: "AutoCAD",
  "Graphic-Designing": "Graphic-Designing",
  "Graphic-Designing-&-Animation": "Graphic-Designing-&-Animation",
  "Cloud-Computing": "Cloud-Computing",
  "Banking-and-Finance": "Banking-and-Finance",
  "Tally-&-GST": "Tally-&-GST",
  "3ds-Max": "3ds-Max",
  DevOps: "DevOps",
};
function Course() {
  const { name } = useParams();
  const course = coursecontent.find((item) => item.name === name);
  if (!course) return "Course not found in content";
  const courseType = courseNames[name] || "";
  const hide = !courseNames[name];
  const assis = course.job === "100% Job Assistance";
  const pdf = course.brochure !== "";
  const content = course.images !== "";
  // const outcome = course.out !=="";
  const disc = course.description !== "";

  return (
    <>
      <brochure.Provider
        value={{ download: course.brochure, name: course.name }}
      >
        <div className="p-5 do ir en"></div>
        <section className="i pg gh ji">
          {/* Bg Shape */}
          <img className="h p q" src={bgShape} alt="Bg Shape" />

          <div className="bb ye i z-10 ki xn dr">
            <div className="tc uf sn tn un gg">
              <div className="animate_left to/2">
                <h2 className="fk vj zp pr lk ac">
                  {course.title}
                </h2>
                <p className="lk">
                  {course.out}
                </p>
              </div>
              <div className="animate_right bf">
                {/* <div className="vc ek kk hh rg ol il cm gi hi">
                  {pdf && <ContactForm />}
                 
                </div> */}
                 <Button/>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center">
          <h1 className="fk vj zp or kk wm wb">Program curriculum</h1>
        </div>
        {hide && (
          <div>
            {Array.isArray(course.content) && course.content.length > 0 ? (
              course.content.map((art, index) => (
                <div
                  key={index}
                  className="flex justify-center align-center flex-col full px-5 py-0 md:pt-10 md:pl-10 md:pb-0 md:pr-20"
                >
                  <h3 className="ek zj kk wm nb _b">{art.side}</h3>
                  <ul className="grid gap-10 md:grid-cols-3 md:gap-5 grid-cols-2 ki xn">
                    {Array.isArray(art.topics) &&
                      art.topics.length > 0 &&
                      art.topics.map((topic, subIndex) => (
                        <li key={subIndex} className="contentcourse">
                          <p>{topic}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No content available</p>
            )}
          </div>
        )}
        {courseType && (
          <div className="hello px-8">
            <ul className="grid gap-10 md:grid-cols-3 md:gap-5 grid-cols-2">
              {course.content.map((arr, ind) => (
                <li key={ind} className="contentcourse">
                  <p>{arr}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {disc && (
          <div className="w-full flex justify-center _b nb">
            <div className="bg-gray-800 relative rounded-2xl -mx-4 p-8 space-y-8 max-w-6xl text-center">
              <div className="space-y-4">
                <p className="text-l text-white regular cj">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {content && (
          <div className="tools-covered-container">
            <div className="content-container">
              <div className="tools-covered">
                <img
                  src="https://newus.in/courese/background.svg"
                  alt="dot-wave-left"
                  className="dot-wave-left"
                />
                <img
                  src="https://newus.in/courese/background.svg"
                  alt="dot-wave-right"
                  className="dot-wave-right"
                />
                <h1 className="heading bold">{course.title} tools</h1>
                <div className="description regular">
                  Gain hands-on experience with the tools used by professional
                  product managers to drive success and deliver value in the
                  real world.
                </div>
                <div className=" flex items-center justify-center w-full">
                  <ul className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 lg:grid-cols-5 px-8 md:px-12">
                    {course.images.map((img, index) => (
                      <li key={index}>
                        <div className="w-full flex flex-col items-center justify-center bg-white md:px-2 md:py-6 rounded-3xl px-1 py-1 cj">
                          <span>{img.img}</span>
                          <h4 className="text-black regular font-bold">
                            {img.type}
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        
      </brochure.Provider>
    </>
  );
}

export default memo(Course);
