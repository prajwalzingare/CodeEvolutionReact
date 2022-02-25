import React, { Component } from "react";

export class Form extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      select: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlecommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    console.log("click");
    alert(
      `${this.state.username} ${this.state.select}  ${this.state.comments} `
    );
  };
  render() {
    const {username,comments,select}=this.state
    return (
      <form action="">
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="">comments</label>
          <textarea
            value={this.state.comments}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={this.handlecommentsChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Select</label>
          <select value={this.state.select} onChange={this.handleSelectChange}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>
        </div>
        <button onClick={this.handleOnClick}>submit</button>
      </form>
    );
  }
}

export default Form;
