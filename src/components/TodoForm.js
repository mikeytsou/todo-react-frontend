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

  handleSubmit(e) {
    const { inputValue } = this.state;
    this.props.addTodo(inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <input
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
