import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, increse } = this.props; //this is shortcut rather than writing each and every time "this".
    return (
      <div>
        <h1 onMouseOver={increse}>hover to increse by 5 {count}</h1>
      </div>
    );
  }
}
export default withCounter(HoverCounter, 5); //pass the value as argument in withcounter component for method to run
