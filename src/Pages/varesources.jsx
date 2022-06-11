import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Navigation/navbar";
import ResourceItem from "../resources/resource";
import "./varesources.css";

export default function Gear() {
  const [resourceItems, setResourceItems] = useState([]);

  const getAllResourceItems = () => {
    axios
      .get("https://va-capstone-backend.herokuapp.com/varesources/get")
      .then((res) => {
        setResourceItems(res.data);
      })
      .catch((error) => {
        console.log(
          `An error has occured with your API 'GET' request: ${error}`
        );
      });
  };

  const renderResourceItems = () => {
    return resourceItems.map((item) => {
      return (
        <div key={item.id}>
          <ResourceItem item={item} />
        </div>
      );
    });
  };

  useEffect(() => {
    getAllResourceItems();
  }, []);

  return (
    <div className="va-resources">
      <NavBar />
      <div className="resource-container">
        <div className="resource">{renderResourceItems()}</div>
      </div>
    </div>
  );
}
