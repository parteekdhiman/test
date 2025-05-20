import React, { useState } from "react";
import logoLight from "./images/logo-light.svg";
import coursecontent from "./Coursecontent";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Handle scroll event for sticky menu
  React.useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile navigation when a link is clicked
  const handleLinkClick = () => {
    setNavigationOpen(false);
  };

  return (
    <header
      className={`g s r vd _a cj ${stickyMenu ? "hh sm _k dj bl ll" : ""}`}
    >
      <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
        <div className="vd to/4 tc wf yf">
          <Link to="index.html" onClick={handleLinkClick}>
            <img className="om" src={logoLight} alt="Logo Light" />
          </Link>

          {/* Hamburger Toggle BTN */}
          <button
            className="po rc"
            style={{ width: "auto" }}
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="rc i pf re pd">
              <span className="du-block h q vd yc">
                <span
                  className={`rc i r s eh um tg te rd eb ml jl dl ${
                    !navigationOpen ? "ue el" : ""
                  }`}
                ></span>
                <span
                  className={`rc i r s eh um tg te rd eb ml jl fl ${
                    !navigationOpen ? "ue qr" : ""
                  }`}
                ></span>
                <span
                  className={`rc i r s eh um tg te rd eb ml jl gl ${
                    !navigationOpen ? "ue hl" : ""
                  }`}
                ></span>
              </span>
              <span className="du-block h q vd yc lf">
                <span
                  className={`rc eh um tg ml jl el h na r ve yc ${
                    !navigationOpen ? "sd dl" : ""
                  }`}
                ></span>
                <span
                  className={`rc eh um tg ml jl qr h s pa vd rd ${
                    !navigationOpen ? "sd rr" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle BTN */}
        </div>

        <div
          className={`vd wo/4 sd qo f ho oo wf yf ${
            navigationOpen ? "d hh rm sr td ud qg ug jc yh" : ""
          }`}
        >
          <nav>
            <ul className="tc _o sf yo cg ep">
              <li>
                <Link to="/" onClick={handleLinkClick} className={`xl ${page === "home" ? "mk" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="xl">
                  About
                </Link>
              </li>
              <li className="c i">
                <Link
                  className="tc _o"
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdown(!dropdown);
                  }}
                >
                  Programs
                  <svg
                    className={`th mm we fd pf ${dropdown ? "wh" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </Link>

                {/* Dropdown Start */}
                <ul className={`a ${dropdown ? "tc" : ""}`}>
                  {coursecontent
                    .filter((l) => l.nav === "Navbar")
                    .map((v, i) => {
                      return (
                        <li key={i + 1}>
                          <Link
                            to={`/Course/${v.name}`}
                            onClick={handleLinkClick}
                            className={`xl ${page === "blog-grid" ? "mk" : ""}`}
                          >
                            {v.title}
                          </Link>
                        </li>
                      );
                    })}
                  <li>
                    <Link
                      to="/CourseList"
                      onClick={handleLinkClick}
                      className={`xl ${page === "blog-grid" ? "mk" : ""}`}
                    >
                      View all course
                    </Link>
                  </li>
                </ul>
                {/* Dropdown End */}
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="tc wf ig pb no">
            <a
              href="https://wa.me/8679686796"
              target="_newus"
              onClick={handleLinkClick}
              className={`ek pk xl ${page === "home" ? "nk yl" : ""} ${
                page === "home" && stickyMenu ? "ok" : ""
              }`}
            >
              <button className="button2">Whatsapp</button>
            </a>
            <a
              href="tel:8679686796"
              onClick={handleLinkClick}
              className={`lk gh dk rg tc wf xf _l gi hi ${
                page === "home" ? "hh/[0.15]" : ""
              } ${page === "home" && stickyMenu ? "sh" : ""}`}
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;