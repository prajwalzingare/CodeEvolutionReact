import React from "react";

export default function Person({ perso }) {
  return (
    <div>
      <h2>
        My id is {perso.id} My name is {perso.name}
      </h2>
    </div>
  );
}
