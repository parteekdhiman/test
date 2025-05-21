import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="duration-icon"
  >
    <path
      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
      fill="#55ABFF"
    />
    <path
      d="M20 21.25C19.8355 21.251 19.6724 21.2194 19.5201 21.1572C19.3678 21.095 19.2293 21.0034 19.1125 20.8875L14.1125 15.8875C13.9967 15.7707 13.905 15.6322 13.8428 15.4799C13.7806 15.3276 13.7491 15.1645 13.75 15V8.75C13.75 8.41848 13.8817 8.10054 14.1161 7.86612C14.3506 7.6317 14.6685 7.5 15 7.5C15.3315 7.5 15.6495 7.6317 15.8839 7.86612C16.1183 8.10054 16.25 8.41848 16.25 8.75V14.4875L20.8875 19.1125C21.0047 19.2287 21.0977 19.367 21.1611 19.5193C21.2246 19.6716 21.2573 19.835 21.2573 20C21.2573 20.165 21.2246 20.3284 21.1611 20.4807C21.0977 20.633 21.0047 20.7713 20.8875 20.8875C20.7707 21.0034 20.6322 21.095 20.4799 21.1572C20.3276 21.2194 20.1645 21.251 20 21.25Z"
      fill="#0078EE"
    />
  </svg>
);

const JobIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="job-icon"
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
      d="M16.1782 13.3966L18.3862 16.9693C18.519 17.1841 18.8324 17.1813 18.9612 16.9641L19.8483 15.4693L21.6648 15.3082C21.9139 15.286 22.0525 15.0093 21.921 14.7966L19.6106 11.0585ZM14.3046 13.3962C14.3016 13.3917 14.298 13.3877 14.2951 13.3829L8.56183 14.7963C8.43034 15.009 8.56898 15.2857 8.818 15.3078L10.6345 15.4689L11.5216 16.9638C11.6505 17.1809 11.9638 17.1837 12.0966 16.9689L14.3046 13.3962Z"
      fill="#E63950"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="arrow-icon"
  >
    <path
      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
      fill="white"
    />
  </svg>
);

const Badge = ({ text, color }) => (
  <span
    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${color}`}
  >
    {text}
  </span>
);

const CourseCard = ({ course, index }) => {
  const { name, title, Duration, out, job, svg, image } = course;
  const showJobAssistance = job === "100% Job Assistance";

  const animationDelay = `${index * 0.1}s`;

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between bg-white transform hover:-translate-y-2"
      style={{ animationDelay, animationFillMode: "both" }}
    >
      <div className="relative overflow-hidden group ac">
        <Link
          to={`/Course/${name}`}
          aria-label={`View details of ${title} course`}
        >
          <LazyLoadImage
            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            alt={`${title} - Course thumbnail`}
            effect="blur"
            wrapperClassName="w-full"
            placeholderSrc="/placeholder-course.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
        </Link>

        {svg && <div className="absolute top-0 left-4 text-white">{svg}</div>}
      </div>

      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-50 border-b border-gray-100 ac">
        <span
          className="py-1 text-xs font-medium text-gray-700 flex flex-row items-center"
          title="Course Duration"
        >
          <ClockIcon />
          <span className="ml-2">{Duration}</span>
        </span>
        {showJobAssistance && (
          <span
            className="py-1 text-xs font-medium text-gray-700 flex flex-row items-center"
            title="Job Assistance"
          >
            <JobIcon />
            <span className="ml-2">{job}</span>
          </span>
        )}
      </div>

      <div className="px-6 py-4 flex-grow">
        <Link
          to={`/Course/${name}`}
          className="font-bold text-xl text-gray-800 hover:text-blue-600 transition duration-300 inline-block mb-3 ac"
          aria-label={`${title} - Click to view course details`}
        >
          {title}
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed ac">
          {out.length > 120 ? `${out.substring(0, 120)}...` : out}
        </p>
      </div>

      <div className="px-6 py-4 border-t border-gray-100">
        <Link
          to={`/Course/${name}`}
          className="w-full flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 transition-all duration-300 group"
          style={{ padding: "10px" }}
          aria-label={`Enroll in ${title} course`}
        >
          <span className="text-white p-2">View Course Details</span>
        </Link>
      </div>
    </div>
  );
};

const CategorySection = ({ title, courses }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-12 transition-opacity duration-1000  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-section`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2
            id={`${title.toLowerCase().replace(/\s+/g, "-")}-section`}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative pr zp qb"
          >
            {title}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl qb">
            {title === "Flagship Programs"
              ? "Our signature courses designed for comprehensive skill development and mastery"
              : title === "Placement Assistance Programs"
              ? "Specialized programs with dedicated career support and industry connections"
              : "Quick, focused courses to build specific skills in a shorter timeframe"}
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 qb"
          style={{ padding: " 0px 34px" }}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={`${course.name}-${index}`}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function Courses({
  another,
  pageTitle = "Professional Online Courses",
  pageDescription = "Explore our wide range of online courses with job assistance and expert instruction.",
}) {
  // Filter courses by category
  const flagshipCourses = another.filter(
    (course) => course.name && course.flag === "flag"
  );
  const placementCourses = another.filter(
    (course) =>
      course.name && course.palcement === "Placement-Assistance-Programs"
  );
  const shortTermCourses = another.filter(
    (course) => course.name && course.palcement === "shot"
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="online courses, professional training, job assistance, career development, programming courses, web development"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              ...flagshipCourses.map((course, index) => ({
                "@type": "Course",
                position: index + 1,
                url: `/Course/${course.name}`,
                name: course.title,
                description: course.out,
                provider: {
                  "@type": "Organization",
                  name: "Your Academy Name",
                },
              })),
            ],
          })}
        </script>
      </Helmet>

      <main className="">
        {/* Flagship Programs */}
        {flagshipCourses.length > 0 && (
          <CategorySection
            title="Flagship Programs"
            courses={flagshipCourses}
          />
        )}

        {/* Placement Assistance Programs */}
        {placementCourses.length > 0 && (
          <CategorySection
            title="Placement Assistance Programs"
            courses={placementCourses}
          />
        )}

        {/* Short Term Programs */}
        {shortTermCourses.length > 0 && (
          <CategorySection
            title="Short Term Programs"
            courses={shortTermCourses}
          />
        )}
      </main>

      {/* Custom styles for animations and transitions */}
      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeInUp 0.6s ease forwards;
        }

        .course-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color: #3b82f6;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .course-button:hover {
          background-color: #2563eb;
        }

        .course-button .arrow-icon {
          transition: transform 0.3s ease;
        }

        .course-button:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}

export default memo(Courses);
