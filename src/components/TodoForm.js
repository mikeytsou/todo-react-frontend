import React, { Component } from 'react';


class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
        />

        <button>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
