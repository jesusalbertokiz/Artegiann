import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Contacto" />
    <h1>
      Hola creo que nos pudieramos llevar muy bien que tal si quedamos luego?
    </h1>
  </Layout>
);

export const Head = () => <Seo title="Contacto" />;

export default IndexPage;
