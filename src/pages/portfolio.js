import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import "../components/layout.css";
import "../styles/portfolio.css";

const PortfolioPage = ({ data }) => (
  <div>
    <Layout>
      <div className="under">
        <div className="lay">
          <div className="outline">
            <SEO title="Home" />
            <div className="paragraph">
              <p className="intro">
                <u>Portfolio</u>
              </p>
              <h1>Projects</h1>
              <p>
                {" "}
                A select few projects that I have created, from personal
                websites to web applications and software tools.
              </p>
              <div className="row">
                <div className="col-l">
                  <div className="desc">
                    <h3>
                      <u>Supermicro Ultra Builds Website</u>
                    </h3>
                    <div className="bubbles-l">
                      <span id="bubbles">Gatsby.js</span>
                      <span id="bubbles">GraphQL</span>
                      <span id="bubbles">jQuery</span>
                      <span id="bubbles">CSS3</span>
                    </div>
                    <div>
                      <p>
                        A website created to help the production team of Equus
                        build servers with Supermicro components with no errors.
                      </p>
                      <p>
                        Cannot link the website or source code of the project
                        under company terms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-r">
                  <div className="col-image">
                    <div>
                      <Img
                        className="imgs"
                        fixed={data.image1.childImageSharp.fixed}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-l">
                  <div className="desc">
                    <h3>
                      <u>Portfolio Website</u>
                    </h3>
                    <div className="bubbles-l">
                      <span id="bubbles">Gatsby.js</span>
                      <span id="bubbles">GraphQL</span>
                      <span id="bubbles">CSS3</span>
                    </div>
                    <div>
                      <p>
                        The website you are currently looking at! Contains all
                        the skills I know, projects I created, and expertise as
                        a software developer.
                      </p>
                    </div>
                    <a
                      className="desc-links"
                      href="https://marcusstew.art"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                    <a
                      className="desc-links"
                      href="https://github.com/mmstewart/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source
                    </a>
                  </div>
                </div>
                <div className="col-r">
                  <div className="col-image">
                    <a>
                      <div>
                        <Img
                          className="imgs"
                          fixed={data.image2.childImageSharp.fixed}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-l">
                  <div className="desc">
                    <h3>
                      <u>Node-RED Temperature Monitoring Flow</u>
                    </h3>
                    <div className="bubbles-l">
                      <span id="bubbles">Bash</span>
                      <span id="bubbles">Node-RED</span>
                    </div>
                    <div>
                      <p>
                        Created a server laboratory temperature-monitoring
                        application to power off the servers once the
                        temperature of the laboratory passes the temperature
                        limit.
                      </p>
                    </div>
                    <a
                      className="desc-links"
                      href="https://github.com/mmstewart/Node-RED-Temperature-Monitoring-Flow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source
                    </a>
                  </div>
                </div>
                <div className="col-r">
                  <div className="col-image">
                    <a>
                      <div>
                        <Img
                          className="imgs"
                          fixed={data.image3.childImageSharp.fixed}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-l">
                  <div className="desc">
                    <h3>
                      <u>Commvault Hardware Monitoring Service</u>
                    </h3>
                    <div className="bubbles-l">
                      <span id="bubbles">Bash</span>
                    </div>
                    <div>
                      <p>
                        A server monitoring utility for capturing hardware
                        status and fault events. This tool allowed clients to
                        view and notifies of failures from physical disk,
                        virtual disks, fans, and power distribution units.
                      </p>
                      <p>
                        Cannot link the website or source code of the project
                        under company terms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-r">
                  <div className="col-image">
                    <a>
                      <div>
                        <Img
                          className="imgs"
                          fixed={data.image4.childImageSharp.fixed}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "css3.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "html5.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(relativePath: { eq: "javascript.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image4: file(relativePath: { eq: "java.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default PortfolioPage;
