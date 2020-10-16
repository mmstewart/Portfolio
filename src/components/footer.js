import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../../static/resume.pdf";

import "./footer.css";
import "../components/layout.css";
import "../utils/fontawesome";

const Footer = () => {
  return (
    <div>
      <div class="foot">
        {" "}
        <h2>Hit My Line!</h2>
        <div class="contacts">
          For any questions, comments, concerns, and anything else, please
          contact me at:
          <br />
          <br />
          <a href="mailto:mss.stewart1@gmail.com">mss.stewart1@gmail.com</a>
        </div>
        <div class="social">
          <ul>
            <li>
              <a
                href="mailto:mss.stewart1@gmail.com"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  id="hover"
                  style={{ color: "rgb(100, 100, 100)" }}
                  size="lg"
                />
              </a>
            </li>
            <li>
              <a
                href={resume}
                title="Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={["fas", "file"]}
                  id="hover"
                  style={{ color: "rgb(100, 100, 100)" }}
                  size="lg"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/marcusmstewart"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  id="hover"
                  style={{ color: "rgb(100, 100, 100)" }}
                  size="lg"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mmstewart/"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  id="hover"
                  style={{ color: "rgb(100, 100, 100)" }}
                  size="lg"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="footers">
          Built by <b>Marcus Stewart</b> with{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
