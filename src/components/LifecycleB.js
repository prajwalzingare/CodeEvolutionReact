import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "prajwal",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecyclB getderivedstatefromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecyclB componentdidmount");
  }
  shouldComponentUpdate() {
    console.log("LIfecycleB shouldcomponentupdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getsnapshotbeforeupdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentdidupdate");
  }

  render() {
    console.log("LifecyclB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
