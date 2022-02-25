import React from "react";

function Hero({ Heroname }) {
  if (Heroname === "jocker") {
    throw new Error("not hero");
  }
  return <div>{Heroname}</div>;
}

export default Hero;
