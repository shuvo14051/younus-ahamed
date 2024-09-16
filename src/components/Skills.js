import React from "react";

function Skills() {
  return (
    <>
      {/* style="padding-top: 100px; text-align: center;" */}
      <section id="skills">
        {/* style="text-align: center; margin-bottom: 30px;" */}
        <h1 className="title pt-3 mb-5">Skills</h1>
        {/* style="text-align: center;" */}
        <div class="container jumbotron skill-logo">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                height="50"
                alt="python logo"
                className="logo-size"
              />
              <h4 className="text-skills">Python</h4>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                height="50"
                alt="django logo"
                className="logo-size"
              />

              <h4 className="text-skills">Django</h4>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                height="50"
                alt="tensorflow logo"
                className="logo-size"
              />
              <h4 className="text-skills">TensorFlow</h4>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                height="50"
                alt="pytorch logo"
                className="logo-size"
              />
              <h4 className="text-skills">PyTorch</h4>
            </div>
          </div>
          {/* style="margin-top: 20px;" */}
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                height="50"
                alt="numpy logo"
                className="logo-size"
              />
              <h4 className="text-skills">NumPy</h4>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                height="50"
                alt="pandas logo"
                className="logo-size"
              />
              <h4 className="text-skills">Pandas</h4>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="50"
                alt="git logo"
                className="logo-size"
              />
              <h4 className="text-skills">Git</h4>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                height="50"
                alt="postgresql logo"
                className="logo-size"
              />
              <h4 className="text-skills">PostgreSQL</h4>
            </div>
          </div>
          {/* style="margin-top: 20px;" */}
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="50"
                alt="html5 logo"
                className="logo-size"
              />
              <h4 className="text-skills">HTML</h4>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="50"
                alt="css3 logo"
                className="logo-size"
              />
              <h4 className="text-skills">CSS</h4>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="50"
                alt="javascript logo"
                className="logo-size"
              />
              <h4 className="text-skills">JavaScript</h4>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height="50"
                alt="react logo"
                className="logo-size"
              />
              <h4 className="text-skills">React</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
