import React from "react";
import Nav from "./Components/Nav";
import { withRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App(props) {
  console.log("props", props);
  return (
    <div className="App">
      {props.location.pathname !== "/" ? <Nav /> : null}
      {routes}
    </div>
  );
}

export default withRouter(App);
