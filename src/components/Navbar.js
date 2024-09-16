import React from "react";

function Navbar() {
  return (
    <>
      <section id="main-navbar">
        <div className="container">
          {/* use fixed-top class in nav tag */}
          <nav className="navbar navbar-expand-lg fixed-top mb-5">
            <div className="container">
              <a className="navbar-brand" href="#">
                <span className="logo-char">A</span>
                hamed
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse right-float"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#publications">
                      Research
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <button
                      onClick={toggleDarkMode}
                      className="nav-link button-dark"
                    >
                      {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Navbar;
