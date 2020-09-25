import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div class="outline">
      <SEO title="404: Page Not Found" />
      <h1 style={{ fontSize: `40px` }}>404 :(</h1>
      <h2>SORRY, THIS PAGE DOES NOT EXIST</h2>
      <p>
        Maybe the page you're looking for is somewhere else...
        <br />
        You can always go back to the <a href="/">homepage</a>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
