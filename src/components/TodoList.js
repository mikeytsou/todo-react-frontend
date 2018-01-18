import React, { Component } from 'react';

const URL = 'https://afternoon-dawn-27478.herokuapp.com/api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    this.loadTodos;
  }

  loadTodos() {
    fetch(URL)
    .then(data => data.json())
    .then(todos => this.setState({todos}));
  }

  render() {
    return (
      <h1>Todo List!</h1>
    );
  }
}

export default TodoList;
