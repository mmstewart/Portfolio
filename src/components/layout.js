import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../components/layout.css";
import "../utils/fontawesome";

/* Active Link Color/Text Decoration */
const activeStyles = {
  color: `#111`,
  textDecoration: `underline`,
  fontFamily: `Raleway, sans-serif`,
};

const ListLink = (props) => (
  <li style={{ padding: 14 }}>
    <Link
      class="cl-effect-17"
      id="cl-effect-17"
      style={{ textDecoration: `none`, color: `rgb(100, 100, 100)` }}
      to={props.to}
      activeStyle={activeStyles}
    >
      {props.children}
    </Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div>
      <div class="sidebar" id="left">
        <nav>
          <header>
            <h2 id="main-color">Marcus Stewart</h2>
            <div class="sub-sidebar">
              Front-end Geek.<br></br>
              Software Developer.<br></br>
              Film Photography Lover.
            </div>
            <ul>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/skills/">Skills</ListLink>
              <ListLink to="/portfolio/">Portfolio</ListLink>
              <ListLink to="/resume/">Resume</ListLink>
            </ul>
            <div class="contact">
              Questions? Comments? Concerns? Contact me at:{" "}
              <a href="mailto:mss.stewart1@gmail.com">mss.stewart1@gmail.com</a>
            </div>
            <div class="socials">
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
          </header>
        </nav>
      </div>
      {children}
    </div>
  );
}
