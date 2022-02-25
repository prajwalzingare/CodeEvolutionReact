import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "prajwal",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecyclA getderivedstatefromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecyclA componentdidmount");
  }

  shouldComponentUpdate() {
    console.log("LIfecycleA shouldcomponentupdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getsnapshotbeforeupdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentdidupdate");
  }
  changeState = () => {
    this.setState = {
      name: "sami",
    };
  };
  render() {
    console.log("LifecyclA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>changestate</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
