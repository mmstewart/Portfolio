import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div class="outline">
      <SEO title="404: Page Not Found" />
      <p style={{ fontSize: `60px`, marginBlockEnd: `0em`, color: `#000` }}>
        404 ERROR
      </p>
      <p
        style={{
          fontSize: `35px`,
          marginBlockStart: `0.5em`,
          marginBlockEnd: `0em`,
          color: `#000`,
        }}
      >
        SORRY, THIS PAGE DOES NOT EXIST.
      </p>
      <p>
        Maybe the page you're looking for is somewhere else...
        <br />
        You can always go back to the <a href="/">homepage</a>.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
