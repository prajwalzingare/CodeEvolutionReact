import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, increse, name } = this.props; //this is shortcut rather than writing each and every time "this".props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increse}>click {name} to increase by 10</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 10); //we passs the value as argument just apply the logic And we pass the whole component i.e clickCounter as argument and return updated component.
