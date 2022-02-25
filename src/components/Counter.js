import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }

  increment5() {
    this.setState({
      count: this.state.count + 5,
    });
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h1>Counter-{this.state.count}</h1>
        <button onClick={() => this.increment()}>increment</button>
        <br />
        <br />
        <button onClick={() => this.decrement()}>decrement</button>
        <br />
        <br />
        <button onClick={() => this.increment5()}>increment by 5</button>
      </div>
    );
  }
}

export default Counter;
