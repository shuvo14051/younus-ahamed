import React, { useState } from "react";

const Publications = () => {
  return (
    <section id="publications">
      <h1 className="title mb-5 mt-3 pt-5">Research</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Paper
              title="1434: Machine Learning-Driven Temporal Subphenotypes of Early Sepsis"
              authors="Ahamed, Y., Smith, G., Kumar, G., Nadkarni, G., Adjeroh, D., & Sakhuja, A."
              year="2024"
              journal="Critical Care Medicine"
              volume="52"
              issue="1"
              pages="S688"
              doiLink="https://journals.lww.com/ccmjournal/citation/2024/01001/1434__machine_learning_driven_temporal.1377.aspx"
              citation={`@article{ahamed20241434,
title={1434: MACHINE LEARNING-DRIVEN TEMPORAL SUBPHENOTYPES OF EARLY SEPSIS},
author={Ahamed, Younus and Smith, Gordon and Kumar, Gagan and Nadkarni, Girish and Adjeroh, Donald and Sakhuja, Ankit},
journal={Critical Care Medicine},
volume={52},
number={1},
pages={S688},
year={2024},
publisher={LWW}
}`}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Paper
              title="A Deep Learning Approach for Satellite and Debris Detection: YOLO in Action"
              authors="Ahamed, M. Y., Syed, M. A. B., Chatterjee, P., Bin Habib, A. Z. S."
              year="2023"
              conference="26th International Conference on Computer and Information Technology (ICCIT)"
              pages="1-6"
              doiLink="https://ieeexplore.ieee.org/abstract/document/10441152"
              citation={`@inproceedings{ahamed2023deep,
title={A Deep Learning Approach for Satellite and Debris Detection: YOLO in Action},
author={Ahamed, Md Younus and Syed, Md Asif Bin and Chatterjee, Paroma and others},
booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
pages={1--6},
year={2023},
organization={IEEE}
}`}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Paper
              title="Pediatric Bone Age Prediction Using Deep Learning"
              authors="Bin Habib, A. Z. S., Islam, M. E., Syed, M. A. B., Ahamed, M. Y., & Tasnim, T."
              year="2023"
              conference="26th International Conference on Computer and Information Technology (ICCIT)"
              pages="1-6"
              doiLink="https://ieeexplore.ieee.org/abstract/document/10441258"
              citation={`@inproceedings{islam2023pediatric,
title={Pediatric Bone Age Prediction Using Deep Learning},
author={Islam, Md Ekramul and Syed, Md Asif Bin and Ahamed, Md Younus and Tasnim, Tanpia and others},
booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
pages={1--6},
year={2023},
organization={IEEE}
}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Paper = ({
  title,
  authors,
  year,
  journal,
  volume,
  issue,
  pages,
  doiLink,
  citation,
  conference,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <p className="citation border-0">
        <i style={{ color: "rgb(167, 91, 29)" }} className="fa fa-file"></i>{" "}
        {authors} ({year}).{" "}
        <a
          style={{
            textDecoration: "none",
            color: "rgb(55, 153, 175)",
            fontWeight: "bold",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={doiLink}
        >
          "{title}"
        </a>{" "}
        {journal
          ? `${journal}, ${volume}(${issue}), ${pages}.`
          : `In Proceedings of the ${conference} (pp. ${pages}). IEEE.`}
      </p>
      <div className="mb-3 mt-0">
        <button
          className="bb"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          cite
        </button>
        <a
          className="bb"
          target="_blank"
          rel="noopener noreferrer"
          href={doiLink}
          type="button"
        >
          doi
        </a>
      </div>
      {isModalOpen && (
        <Modal citation={citation} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

const Modal = ({ citation, onClose }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(citation);
        setCopySuccess("Copied!");
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = citation;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopySuccess("Copied!");
      }
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div
      className="modal"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Cite</h4>
            <button type="button" className="close btn" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <pre
              style={{ backgroundColor: "rgb(232, 228, 228)", padding: "20px" }}
            >
              {citation}
            </pre>
            {copySuccess && <p>{copySuccess}</p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
