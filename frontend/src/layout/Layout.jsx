import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-5 pb-5">{children}</main>
    </>
  );
}

export default Layout;
