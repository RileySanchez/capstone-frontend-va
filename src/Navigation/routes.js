import React from "react";
import Home from "../Pages/home";
import LogIn from "../Pages/login";
import MentalHealth from "../Pages/mentalhealth";
import SignUp from "../Pages/signup";
import StandDown from "../Pages/standdown";
import VAResources from "../Pages/varesources";

const routes = {
  "/": () => <Home />,
  "/mentalhealth": () => <MentalHealth />,
  "/standdown": () => <StandDown />,
  "/varesources": () => <VAResources />,
  "/login": () => <LogIn />,
  "/signup": () => <SignUp />,
};

export default routes;
