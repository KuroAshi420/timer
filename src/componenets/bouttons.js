import React from "react";

function Button(props) {
  return (
    <div>
      {/* here is the error props onClick to call it the Timer Component */}
      <button className="btn" onClick={props.onClick}>{props.btn}</button>
    </div>
  );
}
export default Button;
