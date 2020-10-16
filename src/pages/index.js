import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "../components/layout.css";
import "../styles/index.css";

const IndexPage = () => (
  <div>
    <Layout>
      <div className="under">
        <div className="lay">
          <div className="outline">
            <SEO title="Home" />
            <div className="paragraph">
              <p className="intro">
                <u>Hey, I'm Marcus</u>
                <span className="blinking-cursor">|</span>
              </p>
              <h1>
                I am a web and software developer proficient at creating web
                applications and solving challenging solutions.
              </h1>
              <p>
                You can catch me working with the latest front-end frameworks to
                create websites and projects. I also have experience in other
                object-oriented programning languages such as Java, Python, C as
                well as networking and servers. I am a continuous learner that
                loves to learn new languages and technologies that help develop
                my skills and challenge my growth as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
