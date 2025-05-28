import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import coursecontent from "../Coursecontent";
import "swiper/css";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Courser() {
  const slide = coursecontent.map((content, index) => {
    const { title, out, name, type, image } = content;
    const shortOut = out ? out.substring(0, 90) : "";
    const show = type === "front";

    return (
      show && (
        <SwiperSlide key={index}>
          <LazyLoadImage effect="blur" src={image} alt={image} />
          <h2 className="ac">{title}</h2>
          <p className="ac">{shortOut}...</p>
          <Link
            to={`/Course/${name}`}
            className="lk gh dk rg tc wf xf _l gi hi  "
          >
            <button>ENQUIRE NOW</button>
          </Link>
        </SwiperSlide>
      )
    );
  });
  return (
    <>
      <div className="animate_top bb ze rj ki xn vq">
        <h3 className="fk vj ac nj yn">
          Specialized Program to give you a competitive edge in your Career
        </h3>
      </div>
      <br />
      <Swiper
        watchSlidesProgress={true}
        data-aos="zoom-out"
        data-aos-duration="2000"
        spaceBetween={30}
        loop={true}
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          2560: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {slide}
      </Swiper>
      <div className="flex justify-center items-center">
        <Link to="/CourseList" className="lk gh dk rg tc wf xf _l gi hi  ">
          View all Course
        </Link>
      </div>
    </>
  );
}
export default memo(Courser);
