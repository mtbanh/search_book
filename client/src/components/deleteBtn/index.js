import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0" style = {{float : "right", color : "red", fontSize : "30px", cursor : "pointer"}}>
      ✗
    </span>
  );
}

export default DeleteBtn;
