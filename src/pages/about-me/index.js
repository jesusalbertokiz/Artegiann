import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Sobre Mi" />
    <h1>Hola te contare un poco de mi historia, quedate</h1>
  </Layout>
);

export const Head = () => <Seo title="Sobre Mi" />;

export default IndexPage;
