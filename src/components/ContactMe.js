import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false); // State for loading

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .sendForm(
        "service_cu3kusg",
        "template_sdcl5a6",
        form.current,
        "NulU0dKsWibuwdmYE"
      )
      .then(
        () => {
          setAlert({
            show: true,
            message: "Email sent successfully!",
            type: "success",
          });
          form.current.reset();
          setLoading(false); // Stop loading

          // Automatically hide the alert after 3 seconds
          setTimeout(() => {
            setAlert({ show: false, message: "", type: "" });
          }, 3000);
        },
        (error) => {
          setAlert({
            show: true,
            message: "Failed to send email. Please try again later.",
            type: "danger",
          });
          setLoading(false); // Stop loading

          // Automatically hide the alert after 3 seconds
          setTimeout(() => {
            setAlert({ show: false, message: "", type: "" });
          }, 3000);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-12"></div>
        <div className="col-md-6 col-lg-6 col-12">
          <h1 className="title pt-3 mb-5">Contact Me</h1>
          <div className="center-elements">
            <i class="fas fa-envelope"></i>
            <a href="mailto:ma00087@mix.wvu.edu" className="email">
              {" "}
              ma00087@mix.wvu.edu
            </a>
          </div>

          <div className="mt-2 center-elements">
            <i className="fas fa-map-marker-alt"></i> AERB Room 242, WVU
            Evansdale Campus, Morgantown, WV 26506
          </div>
          {alert.show && (
            <div
              className={`alert alert-${alert.type} alert-dismissible fade show`}
              role="alert"
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 1000,
                width: "auto",
                maxWidth: "300px",
              }}
            >
              <strong>{alert.message}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlert({ show: false, message: "", type: "" })}
              ></button>
            </div>
          )}
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="user_email"
                name="user_email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-info btn-block"
              style={{ width: "100%", fontWeight: "bold" }}
              disabled={loading}
            >
              {loading ? <div className="loader"></div> : "Send"}
            </button>
          </form>
        </div>

        {/* <div className="col-md-6 col-lg-6 col-12"></div> */}
      </div>
    </div>
  );
};

export default ContactMe;
