import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Blog" />
    <h1>Hola aca compartire ideas, proyectos y experiencias que he vivido</h1>
  </Layout>
);

export const Head = () => <Seo title="Blog" />;

export default IndexPage;
