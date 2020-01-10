import React, { Component, Fragment } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ContentHeader from "./content-header";

const Layout = ({ pageTitle, children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="content-wrapper">
        <ContentHeader pageTitle={pageTitle} />
        <div className="content">
          <div className="container">{children}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
