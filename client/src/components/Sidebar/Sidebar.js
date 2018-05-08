import React from "react";
import "./Sidebar.css";

const Sidebar = props => (
  <div className="Sidebar">
    {/* <p id="side-bar">Sidebar goes here</p> */}
    <div className="quote">
      <h5 style={{ fontStyle: "italic" }}>"{props.quoteText}"</h5>
      <p style={{ fontStyle: "italic" }}>{"--" + props.quoteAuthor}</p>
    </div>
  </div>
);

export default Sidebar;
