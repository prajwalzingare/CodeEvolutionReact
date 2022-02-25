import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("click ");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default ClassClick;
