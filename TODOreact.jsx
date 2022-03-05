import "./styles.css";
import React from "react";

class Welcome extends React.Component {
  state = {
    task: "",
    taskArray: []
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };
  saveTask = () => {
    if (this.state.taskArray.length > 0) {
      this.setState({
        taskArray: [...this.state.taskArray, this.state.task]
      });
    } else {
      this.setState({
        taskArray: [this.state.taskArray]
      });
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button onClick={this.saveTask}> Add to list</button>
        {this.state.taskArray.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    );
  }
}

export default Welcome;
