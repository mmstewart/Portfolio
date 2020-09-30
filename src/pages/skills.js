import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import "../components/layout.css";
import "../styles/skills.css";

const SkillsPage = ({ data }) => (
  <div>
    <Layout>
      <div class="under">
        <div class="lay">
          <div class="outline">
            <SEO title="Skills" />
            <div class="paragraph">
              <p class="skills">
                <u>Skills</u>
              </p>
              <h1>
                Passionate about writing efficient, modern, and sustainable
                code.
              </h1>
              <p>
                From obtaining a computer science degree from The University of
                Wisconsin-Madison, I have the skills to create innovative
                object-oriented projects, as well as cultivate the user
                experience.
              </p>
              <p style={{ fontWeight: 700, color: `#000`, fontSize: `16px` }}>
                Languages I that I know and use:
              </p>
              <div class="frame">
                <div class="icon">
                  <div>
                    <Img fixed={data.image1.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">CSS3</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image2.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">HTML5</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image3.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">JavaScript</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image4.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Java</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image5.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Python</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image6.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Bash</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image7.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">C</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image8.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">PHP</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image9.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">SQL</span>
                  </div>
                </div>
              </div>

              <p style={{ fontWeight: 700, color: `#000`, fontSize: `16px` }}>
                Technologies that I know and worked with:
              </p>
              <div class="frame">
                <div class="icon">
                  <div>
                    <Img fixed={data.image10.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">VS Code</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image11.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">React JS</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image12.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">GraphQL</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image13.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Netlify</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image14.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Linux</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image15.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Servers</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image16.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Git & Github</span>
                  </div>
                </div>
                <div class="icon">
                  <div>
                    <Img fixed={data.image17.childImageSharp.fixed} />
                  </div>
                  <div>
                    <span id="text">Docker</span>
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
    image5: file(relativePath: { eq: "python.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image6: file(relativePath: { eq: "bash.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image7: file(relativePath: { eq: "c.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image8: file(relativePath: { eq: "php.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image9: file(relativePath: { eq: "sql.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image10: file(relativePath: { eq: "vscode.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image11: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image12: file(relativePath: { eq: "graphql.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image13: file(relativePath: { eq: "netlify.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image14: file(relativePath: { eq: "linux.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image15: file(relativePath: { eq: "servers.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image16: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image17: file(relativePath: { eq: "docker.png" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default SkillsPage;
