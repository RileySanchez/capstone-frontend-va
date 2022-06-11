import React from "react";
import NavBar from "../Navigation/navbar";
import "./standdown.css";

const StandDown = () => {
  return (
    <>
      <div className="nav-bar-wrapper">
        <NavBar />
      </div>
      <div className="page-content">
        <h1>Stand Down</h1>
        <p>
          This years Stand Down has already been completed! When the next one is
          announced this page will be updated!
        </p>
      </div>
    </>
  );
};
export default StandDown;
