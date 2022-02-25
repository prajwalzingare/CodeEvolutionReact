import React, { Component } from "react";

export class ClickCounterTwo36 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Click {count} Times</button>;
  }
}

export default ClickCounterTwo36;
