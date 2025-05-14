import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const [loadedImages, setLoadedImages] = useState({
    shape1: false,
    shape2: false,
    shape3: false,
    shape4: false,
  });

  const statsData = [
    { id: 1, number: "74,000+", title: "Total Students" },
    { id: 2, number: "12,000+", title: "Placed Students" },
    { id: 3, number: "26+", title: "Years of Experience" },
    { id: 4, number: "111+", title: "Hiring Partners" },
  ];

  // Preload images
  useEffect(() => {
    const shapeImages = [
      { key: "shape1", src: "images/shape-11.svg" },
      { key: "shape2", src: "images/shape-07.svg" },
      { key: "shape3", src: "images/shape-14.svg" },
      { key: "shape4", src: "images/shape-15.svg" },
    ];

    shapeImages.forEach(({ key, src }) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => ({
          ...prev,
          [key]: true,
        }));
      };
    });
  }, []);

  return (
    <section className="i pg qh rm ji hp relative">
      {/* Decorative shapes */}
      <img
        src="images/shape-11.svg"
        alt="Shape"
        className={`of h ga ha ke transition-opacity duration-500 ${
          loadedImages.shape1 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoadedImages((prev) => ({ ...prev, shape1: true }))}
      />
      <img
        src="images/shape-07.svg"
        alt="Shape"
        className={`h ia o ae jf transition-opacity duration-500 ${
          loadedImages.shape2 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoadedImages((prev) => ({ ...prev, shape2: true }))}
      />
      <img
        src="images/shape-14.svg"
        alt="Shape"
        className={`h ja ka transition-opacity duration-500 ${
          loadedImages.shape3 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoadedImages((prev) => ({ ...prev, shape3: true }))}
      />
      <img
        src="images/shape-15.svg"
        alt="Shape"
        className={`h q p transition-opacity duration-500 ${
          loadedImages.shape4 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoadedImages((prev) => ({ ...prev, shape4: true }))}
      />

      {/* Stats container */}
      <div className="bb ze i va ki xn br">
        <div className="tc uf sn tn xf un gg">
          {statsData.map((stat) => (
            <div key={stat.id} className="animate_top me/5 ln rj">
              <h2 className="gk vj zp or kk wm hc">{stat.number}</h2>
              <p className="ek bk aq">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
