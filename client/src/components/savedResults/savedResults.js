import React from "react";

// This file exports both the List and ListItem components

export function SavedResults({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function SavedItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
