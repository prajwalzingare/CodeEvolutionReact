import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //   1)if/else method
    // if (this.state.isLoggedIn) {
    //   return(<h1>prajwal</h1>);
    // } else {
    //   return(<div>himanshu</div>);
    // }
    // 2)Element variables/ in which variable is define at top
    // let massege
    // if (this.state.isLoggedIn) {
    //       return(massege="prajwal");
    //     } else {
    //       return(massege="himanshu");
    //     }

    // 3) Ternary Conditional Opearator
    // return this.state.isLoggedIn ? <div>prajwal</div> : <div>himanshu</div>;
    // 4)Short circuit operator
// return this.state.isLoggedIn&&<h1>prajwal</h1>
    // return (<div>

    //  </div>);
  }
}

export default UserGreeting;
