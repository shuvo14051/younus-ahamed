import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      const paragraphs = document.querySelectorAll("body p");
      paragraphs.forEach((paragraph) => {
        paragraph.classList.add("dark-mode");
      });
    } else {
      document.body.classList.remove("dark-mode");
      const paragraphs = document.querySelectorAll("body p");
      paragraphs.forEach((paragraph) => {
        paragraph.classList.remove("dark-mode");
      });
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section id="main-navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
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
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Research
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Problem Solving
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={toggleDarkMode}
                      className="nav-link button-dark"
                    >
                      {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                  </li>
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

// import React from "react";

// function Navbar() {
//   return (
//     <>
//       <section id="main-navbar">
//         <div className="container">
//           <nav className="navbar navbar-expand-lg">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="#">
//                 <span className="logo-char">A</span>
//                 hamed
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 className="collapse navbar-collapse right-float"
//                 id="navbarSupportedContent"
//               >
//                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="#">
//                       Home
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       About
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Skills
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Research
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Experience
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Problem Solving
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Navbar;
