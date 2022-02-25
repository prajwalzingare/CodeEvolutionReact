import React, { Component } from "react";
import { UserConsumer } from "./UserContext";
//what user  component  tells us that i will provide you the value you only render proper jsx by using that value
export class ComponentF39 extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return <div>hello {name}</div>;
        }}
      </UserConsumer>
    );
  }
}
//userconsumer pass the function as its child and this function takes the contextprovider value as its parameter and return the jsx.
export default ComponentF39;
