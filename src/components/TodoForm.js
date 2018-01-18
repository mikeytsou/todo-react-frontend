import React, { Component } from 'react';


class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e) {
    const { inputValue } = this.state;

    if (inputValue === '') return null;

    this.props.addTodo(inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div className="input">
        <input
          className="todo-input"
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e)}
        />

        <button onClick={() => this.handleSubmit()}>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
