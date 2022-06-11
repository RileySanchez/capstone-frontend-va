import React from "react";
import "./resource.css";

export default function VaResources(props) {
  const { id, title, description } = props.item;

  const handleAddToPage = () => {
    fetch("https://va-capstone-backend.herokuapp.com/varesources/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("Error adding to page", error);
      });
  };

  return (
    <div className="resources" key={id}>
      <div className="container">
        <div className="overlay">
          <div className="text">
            <h1 className="title">{title}</h1>

            <p className="description">
              <br />
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
