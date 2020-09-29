import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./footer.js";

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
    <div style={{ outline: `none` }} tabIndex="-1">
      <div class="navbar">
        <div>
          <div>
            <span>+</span>
          </div>
          <div>
            <h2 id="main-color">Marcus Stewart</h2>
          </div>
          <div>
            <ListLink to="/">Home</ListLink>
          </div>
        </div>
      </div>
      <div class="sidebar" id="left">
        <nav>
          <header>
            <h2 id="main-color">Marcus Stewart</h2>
            <div class="sub-sidebar">
              Front-end Geek.
              <br />
              Software Developer.
              <br />
              Film Photography Lover.
            </div>
            <div class="lens">
              <nav class="effect">
                <ul>
                  <ListLink to="/">
                    <span id="ln">Home</span>
                  </ListLink>
                  <br />
                  <ListLink to="/skills/">
                    <span id="ln">Skills</span>
                  </ListLink>
                  <ListLink to="/portfolio/">
                    <span id="ln">Portfolio</span>
                  </ListLink>
                  <ListLink to="/resume/">
                    <span id="ln">Resume</span>
                  </ListLink>
                </ul>
              </nav>
            </div>
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
      <Footer />
    </div>
  );
}
