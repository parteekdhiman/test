import React, { useEffect, useState } from "react";
import partner from "../alldata/partnersdata";

function Partner() {
  const [loadedImages, setLoadedImages] = useState({});

  // Preload images to prevent flickering
  useEffect(() => {
    partner.forEach((item, index) => {
      // Preload light version
      const imgLight = new Image();
      imgLight.src = item.imgLight || item.img;
      imgLight.onload = () => {
        setLoadedImages((prev) => ({
          ...prev,
          [`${index}-light`]: true,
        }));
      };

      // Preload dark version if exists
      if (item.imgDark) {
        const imgDark = new Image();
        imgDark.src = item.imgDark;
        imgDark.onload = () => {
          setLoadedImages((prev) => ({
            ...prev,
            [`${index}-dark`]: true,
          }));
        };
      }
    });
  }, []);

  // Create partner items with the new structure
  const partnerItems = partner.map((item, index) => {
    const { name, link, img, imgLight = img, imgDark = null } = item;

    return (
      <a
        key={index}
        href={link || "#"}
        className="rc animate_top"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* Light mode image (shown by default) */}
        <img
          className={`tk ml il zl om transition-opacity duration-300 ${
            loadedImages[`${index}-light`] ? "opacity-100" : "opacity-0"
          }`}
          src={imgLight}
          alt={name || "Partner"}
          onLoad={() =>
            setLoadedImages((prev) => ({ ...prev, [`${index}-light`]: true }))
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' fill='%23f0f0f0'/%3E%3Ctext x='60' y='20' font-family='Arial' font-size='12' fill='%23cccccc' text-anchor='middle' dominant-baseline='middle'%3ELogo%3C/text%3E%3C/svg%3E";
          }}
        />

        {/* Dark mode image (if provided) */}
        {imgDark && (
          <img
            className={`xc sk ml il zl nm transition-opacity duration-300 ${
              loadedImages[`${index}-dark`] ? "opacity-100" : "opacity-0"
            }`}
            src={imgDark}
            alt={name || "Partner"}
            onLoad={() =>
              setLoadedImages((prev) => ({ ...prev, [`${index}-dark`]: true }))
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' fill='%23333'/%3E%3Ctext x='60' y='20' font-family='Arial' font-size='12' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3ELogo%3C/text%3E%3C/svg%3E";
            }}
          />
        )}
      </a>
    );
  });

  return (
    <section className="pj vp mr">
      {/* Section Title Start */}
      <div>
        <div className="animate_top bb ze rj ki xn vq">
          <h2 className="fk vj pr  wm on/5 gq/2 bb _b" style={{color:"white"}}>
            Business Partner of
          </h2>
        </div>
      </div>
      {/* Section Title End */}

      <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
        <div className="wc rf qn zf cp kq xf wf">{partnerItems}</div>
      </div>
    </section>
  );
}

export default Partner;
