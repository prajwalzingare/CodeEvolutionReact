import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComp";

// import RegComp from "./RegComp";

export class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "prajwal",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "prajwal",
      });
    }, 2000);
  }
  render() {
    console.log("parent component");
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
