import React from "react";
import "./Popup.css";
// import image from "./popup.png";
import image from "./Womens-Day.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <LazyLoadImage
          effect="blur"
          src={image}
          alt="Popup"
          className="popup-image"
        />
        <a
          className="popup-gesture regular"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSe6ar2j0Yf2GY6DObdAUZpxJcOhEDBvmgYNFRYpFbv-hbgw/viewform?fbclid=IwY2xjawF8Y19leHRuA2FlbQIxMAABHdOP0JqgWZWqraDPI1ZNwWOn5MFCnXEU2HK9vOWHEmO-IuLmNfZW0-8OCA_aem_W1Tq1QjIyglMghr4-D9tQg"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Registration Form
        </a>
      </div>
    </div>
  );
};

export default Popup;
