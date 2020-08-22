import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      <h1>Book Search</h1>
      <h4>Search for and Save Books of Interest</h4>
    </div>
  );
}

export default Jumbotron;