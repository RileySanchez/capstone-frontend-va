import React from "react";
import NavBar from "../Navigation/navbar";
import Map from "../Map/map";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="nav-bar-wrapper">
        <NavBar />
      </div>
      <div className="homepage-wrapper">
        <div className="content-top">
          <h1>This is where you can get ALL the information for Veterans!</h1>
        </div>
        <div className="content-bottom">
          <div className="homepage-footer">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
