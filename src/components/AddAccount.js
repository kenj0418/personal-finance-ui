import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class AddTask extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Task"
          value={this.state.title}
          onChange={this.onChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    );
  }
}

export default AddTask;
