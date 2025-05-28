import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import coursecontent from "../Coursecontent";
import "swiper/css";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogsSection = () => {
  const [sectionTitle] = useState(
    "Specialized Program to give you a competitive edge in your Career"
  );

  // Filter front-type courses for the slider
  const frontCourses = coursecontent.filter(
    (course) => course.type === "front"
  );

  return (
    <section className="ji gp uq">
      {/* Section Title Start */}
      <div>
        <div
          className="fade-up bb ze rj ki xn vq"
          data-sr-id="34"
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition:
              "all, opacity 2.8s cubic-bezier(0.5, 0, 0, 1), transform 2.8s cubic-bezier(0.5, 0, 0, 1)",
          }}
        >
          <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
        </div>
      </div>
      {/* Section Title End */}

      <div className="bb ye ki xn vq jb jo">
        <div className="wc qf pn xo zf iq">
          <div className="fade-up sg vk rm xm">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {frontCourses.map((course, index) => (
                <SwiperSlide key={index}>
                  <CourseCard course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate CourseCard component for better organization
const CourseCard = ({ course }) => {
  const { title, out, name, image } = course;
  const shortOut = out ? out.substring(0, 90) : "";

  return (
    <div
      className="fade-up sg vk rm xm"
      style={{
        visibility: "visible",
        opacity: 1,
        transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
        transition:
          "all, opacity 2.8s cubic-bezier(0.5, 0, 0, 1), transform 2.8s cubic-bezier(0.5, 0, 0, 1)",
      }}
    >
      <div className="c rc i z-1 pg">
        {/* Use LazyLoadImage for better performance */}
        <LazyLoadImage
          className="w-full"
          src={image}
          alt={title}
          effect="blur"
        />
        <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
          <Link
            to={`/Course/${name}`}
            className="vc ek rg lk gh sl ml il gi hi"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="yh">
        {shortOut && <p className="bb mb-2">{shortOut}...</p>}
        <h4 className="ek tj ml il kk wm xl eq lb">
          <Link to={`/Course/${name}`}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogsSection;
