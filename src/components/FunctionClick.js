import React from "react";

export default function FunctionClick() {

function clickHandler(params) {
    alert("Hello prajwal")
    console.log("clicked");
}

  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}
