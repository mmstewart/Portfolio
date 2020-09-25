import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "../components/layout.css";
import "../styles/index.css";

const IndexPage = () => (
  <div>
    <Layout>
      <div class="outline">
        <SEO title="Home" />
        <div class="paragraph">
          <p class="intro">
            <u>Hey, I'm Marcus</u>
            <span class="blinking-cursor">|</span>
          </p>
          <h1>
            I am a web and software develop proficient at creating web
            applications and solving challenging solutions.
          </h1>
          <p>
            You can mainly catch me working with front-end frameworks to create
            front-end websites and projects. I also have experience in some
            other object-oriented programs such as Java, Python, C as well as
            networking and servers. In general, I love learning new languages
            and technology that help develop my skills and challenge my growth
            as a developer.
          </p>
        </div>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
