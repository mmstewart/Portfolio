import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "../components/layout.css";
import "../styles/skills.css";

const SkillsPage = () => (
  <div>
    <Layout>
      <div class="outline">
        <SEO title="Skills" />
        <div class="paragraph">
          <p class="skills">
            <u>Skills</u>
          </p>
          <h1>
            Passionate about writing efficient, modern, and sustainable code.
          </h1>
          <p>
            From obtaining a computer science degree from The University of
            Wisconsin-Madison, I have the skills to create innovative
            object-oriented projects, as well as cultivate the user experience.
          </p>
          <p>Languages I that I know and use:</p>
          <p>Technologies that I work(ed) with:</p>
        </div>
      </div>
    </Layout>
  </div>
);

export default SkillsPage;
