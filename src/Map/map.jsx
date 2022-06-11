import React from "react";
import "./map.css";

export default function Map() {
  return (
    <div className="va-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.388182257176!2d-112.07032272752858!3d33.495863847370636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b128d94e41297%3A0xf9d288e6542de03b!2sCarl%20T.%20Hayden%20Veterans&#39;%20Administration%20Medical%20Center!5e0!3m2!1sen!2sus!4v1653533177541!5m2!1sen!2sus"
        width="1940"
        height="620"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="vamap"
      >
        Va Map
      </iframe>
    </div>
  );
}
