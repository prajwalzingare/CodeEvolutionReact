import React, { Component } from "react";
//counter component tells that i will handle all logic you only worry about render the thing that you want to render.
class Counter37 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((e) => {
      return { count: e.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counter37;
