import React from "react";

function About() {
  return (
    <>
      {/* style="padding-top: 100px;" */}
      <section id="about">
        {/* style="padding-bottom: 20px;" */}
        <h1 className="title mb-5 mt-3">About Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>Hi there!</h3>
              <p className="text-justify">
                I'm <em>Ahamed</em>, currently pursuing a PhD program in
                Computer Science at the{" "}
                <strong>
                  <a className="under" href="https://lcsee.statler.wvu.edu">
                    LANE Department of Computer Science and Electrical
                    Engineering
                  </a>
                </strong>
                ,
                <strong>
                  <a className="under" href="https://www.wvu.edu">
                    West Virginia University
                  </a>
                </strong>
                . My current research with
                <strong>
                  <a
                    className="under"
                    href="https://directory.statler.wvu.edu/faculty-staff-directory/donald-adjeroh"
                  >
                    {" "}
                    Dr. Donald Adjeroh{" "}
                  </a>
                </strong>
                focuses on digital health using machine learning and deep
                learning.
              </p>
              <h3>Interests</h3>
              <ul>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Digital Health</li>
                <li>Health Analytics</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <h3>Education</h3>

              <ul className="ul-edu">
                <li
                  className="card edu mb-4 border-0"
                  style={{ backgroundColor: "#f0ebea" }}
                >
                  <div>
                    <i className="fa-li fas fa-graduation-cap"></i>
                    <strong>
                      <p>PhD in Computer Science, On-going</p>
                    </strong>
                    <p className="text-4">West Virginia University</p>
                  </div>
                </li>
                <li
                  className="card edu border-0"
                  style={{ backgroundColor: "#f0ebea" }}
                >
                  <div>
                    <i className="fa-li fas fa-graduation-cap"></i>
                    <strong>
                      <p>
                        BSc in Information and Communication Technology, 2019
                      </p>
                    </strong>
                    <p>Mawlana Bhashani Science and Technology University</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
