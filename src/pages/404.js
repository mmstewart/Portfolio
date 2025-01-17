import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div className="under">
      <div className="lay">
        <div className="outline">
          <SEO title="404: Page Not Found" />
          <p
            className="one"
            style={{ fontSize: `55px`, marginBlockEnd: `0em`, color: `#000` }}
          >
            404 ERROR
          </p>
          <p
            className="two"
            style={{
              fontSize: `35px`,
              marginBlockStart: `0.5em`,
              marginBlockEnd: `0em`,
              color: `#000`,
            }}
          >
            SORRY, THIS PAGE DOES NOT EXIST.
          </p>
          <p className="three" style={{ marginBlockEnd: "10.5em" }}>
            Maybe the page you're looking for is somewhere else...
            <br />
            You can always go back to the <a href="/">homepage</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
