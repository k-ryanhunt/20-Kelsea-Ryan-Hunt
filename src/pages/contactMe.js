import React from "react";
import "../App.css";
import photo from "../images/picofme.jpg";
import pdf from "../../src/images/Kelsea Hunt - Resume.pdf";
import logo from "../images/logo512.png";

const Contact = () => {
  return (
    <footer class="page-footer">
      <img
        class="center-block"
        id="pic"
        src={photo}
        alt="profile pic"
        width="25%"
        height="auto"
      />
      <div class="container">
        <div class="row">
          <div class="col l4 s12">
            <ul>
              <div class="row">
                <div class="col s12 m5">
                  <div class="card-panel">
                    <span class="white-text">
                      <li>
                        <a
                          id="contactInfo"
                          class="grey-text text-lighten-3 valign-wrapper"
                          href="#!"
                        >
                          <i class="material-icons" id="icon">
                            phonelink_ring
                          </i>
                          843-822-9802
                        </a>
                      </li>
                    </span>
                  </div>
                  <div class="card-panel">
                    <span class="white-text">
                      <li>
                        <a
                          id="contactInfo"
                          class="grey-text text-lighten-3 valign-wrapper"
                          href="mailto:hunt.kelsearyan@gmail.com"
                        >
                          <i class="material-icons" id="icon">
                            email
                          </i>
                          HUNT.KELSEARYAN@GMAIL.COM
                        </a>
                      </li>
                    </span>
                  </div>
                  <div class="card-panel">
                    <span class="white-text">
                      <li>
                        <a
                          id="contactInfo"
                          class="grey-text text-lighten-3 valign-wrapper"
                          href={pdf}
                        >
                          <i class="material-icons" id="icon">
                            content_copy
                          </i>
                          RESUME
                        </a>
                      </li>
                    </span>
                  </div>
                  <div class="card-panel">
                    <span class="white-text">
                      <li>
                        <a
                          id="contactInfo"
                          class="grey-text text-lighten-3 valign-wrapper"
                          href="https://github.com/k-ryanhunt"
                        >
                          <i class="material-icons" id="icon">
                            code
                          </i>
                          GITHUB
                        </a>
                      </li>
                    </span>
                  </div>
                  <div class="card-panel">
                    <span class="white-text">
                      <li>
                        <a
                          id="contactInfo"
                          class="grey-text text-lighten-3 valign-wrapper"
                          href="https://www.linkedin.com/in/k-ryanhunt/"
                        >
                          <i class="material-icons" id="icon">
                            group_add
                          </i>
                          LINKEDIN
                        </a>
                      </li>
                    </span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <img
        class="center-block"
        id="pic"
        src={logo}
        alt="profile pic"
        width="15%"
        height="auto"
      />
    </footer>
  );
};
export default Contact;
