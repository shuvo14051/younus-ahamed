import React from "react";

function About() {
  return (
    <>
      {/* style="padding-top: 100px;" */}
      <section id="about">
        {/* style="padding-bottom: 20px;" */}
        <h1 class="title">About Me</h1>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <h3>Hi there!</h3>
              <p class="text-justify">
                I'm <em>Ahamed</em>, currently pursuing a PhD program in
                Computer Science at the{" "}
                <strong>
                  <a class="under" href="https://lcsee.statler.wvu.edu">
                    LANE Department of Computer Science and Electrical
                    Engineering
                  </a>
                </strong>
                ,
                <strong>
                  <a class="under" href="https://www.wvu.edu">
                    West Virginia University
                  </a>
                </strong>
                . My current research with
                <strong>
                  <a
                    class="under"
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
            <div class="col-12 col-md-6">
              <h3>Education</h3>

              <ul class="ul-edu">
                <li class="card edu mb-4 border-0">
                  <div>
                    <i class="fa-li fas fa-graduation-cap"></i>
                    <strong>
                      <p class="text-dark">PhD in Computer Science, On-going</p>
                    </strong>
                    <p class="text-4">West Virginia University</p>
                  </div>
                </li>
                <li class="card edu border-0">
                  <div>
                    <i class="fa-li fas fa-graduation-cap"></i>
                    <strong>
                      <p class="text-dark">
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
