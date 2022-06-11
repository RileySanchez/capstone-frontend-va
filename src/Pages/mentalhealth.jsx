import React from "react";
import NavBar from "../Navigation/navbar";
import "./mentalhealth.css";

const MentalHealth = () => {
  return (
    <>
      <div className="nav-bar-wrapper">
        <NavBar />
      </div>
      <div className="page-content">
        <h1>VETERANS CRISIS LINE Call 1-800-273-8255 Press 1</h1>
        <br></br>
        <p>
          The VA Emergency Department (ED) can be utilized outside of normal
          Jade Opal Clinical Hours for mental health issues. The VA ED is
          located in Southeast corner of the Phoenix VA medical center. It is
          open 24/7!
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Go to the Jade Opal Clinic (Mental Health Clinic) located at the
          Phoenix VA Medical Center between 8:00am and 4:00pm, Monday through
          Friday to request a future appointment OR phone them directly at
          602-277-5551 ext. 2752 during business days/hours. If there is need to
          see a psychiatrist immediately for current symptoms or medication
          referrals or adjustments, a Veteran can do a Walk-in appointment at
          Jade Opal during business days/hours.
        </p>
      </div>
    </>
  );
};
export default MentalHealth;
