import React from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
