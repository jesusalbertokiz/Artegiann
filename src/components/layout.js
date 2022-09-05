import * as React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import Footer from "./footer";
import "./styles/main.css";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="site-content">
      <Header />

      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
