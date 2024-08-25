import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const openResume = () => {
    window.open("/assets/Md__Younus_Ahamed.pdf");
  };

  return (
    <>
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center col-md-6  col-lg-6 col-6 col-sm-6">
              <div className="section__pic-container text-center">
                <img
                  className="first-image"
                  src={`${process.env.PUBLIC_URL}/images/shuvo.png`}
                  alt="Ahamed pic"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center col-md-6 col-lg-6 col-6 col-sm-6">
              <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title main-title">Younus Ahamed</h1>
                <p className="section__text__p2">CS PhD Student</p>
                {/* style="color: rgb(190, 53, 29);" */}
                {/* <h3>
                  And I'm a<span className="typing"></span>
                </h3> */}
                <h3 className="section__header">
                  And I'm a{" "}
                  <span className="typing">
                    <TypeAnimation
                      sequence={[
                        "Researcher",
                        1000,
                        "Teacher",
                        1000,
                        "Problem Solver",
                        1000,
                        "Critical Thinker",
                        1000,
                      ]}
                      wrapper="span"
                      speed={150}
                      repeat={Infinity}
                      style={{ display: "inline-block" }}
                    />
                  </span>
                </h3>
                <div className="butn-container">
                  <button className="butn butn-color-2" onClick={openResume}>
                    Resume
                  </button>
                  <button
                    className="butn butn-color-1"
                    onclick="location.href='#contact'"
                  >
                    Contact
                  </button>
                </div>
                <div id="socials-container">
                  <a
                    href="https://linkedin.com/in/ahamed14051"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin big-icon"></i>
                  </a>
                  <a
                    href="https://github.com/shuvo14051"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github big-icon"></i>
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=X2xlTEAAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-google big-icon"></i>
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Md-Younus-Ahamed"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-researchgate big-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
