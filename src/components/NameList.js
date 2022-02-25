import React from "react";
import Person from "./Person";

export default function NameList() {
  const names = ["prajwal", "sami", "bhumita","sami"];
  let Persons = [
    {
      id: 1,
      name: "prajwal",
      age: 22,
    },
    {
      id: 2,
      name: "sami",
      age: 20,
    },
    {
      id: 3,
      name: "bhumita",
      age: 40,
    },
  ];
  const NameList = names.map((name,index) => (
    <h2 key={index}>{index} {name}</h2>
  ));
  return <div>{NameList}</div>;
}
