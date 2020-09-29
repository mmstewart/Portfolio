import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.css";
import "../components/layout.css";
import "../utils/fontawesome";

const Footer = () => {
  return (
    <div>
      <div class="foot">
        {" "}
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
              <a href="mailto:mss.stewart1@gmail.com">
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
              <a href="">
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
              <a href="">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  id="hover"
                  style={{ color: "rgb(100, 100, 100)" }}
                  size="lg"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/mmstewart/">
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
        <div class="footer">
          Built by <b>Marcus Stewart</b> with{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
