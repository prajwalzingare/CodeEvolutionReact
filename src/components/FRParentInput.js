import React, { Component } from "react";
import FRInput from "./FRInput";

export class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <FRInput ref={this.myRef} />
        <button>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
