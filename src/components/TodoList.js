import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const URL = 'https://afternoon-dawn-27478.herokuapp.com/api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentWillMount() {
    this.loadTodos();
  }

  loadTodos() {
    fetch(URL)
    .then(res => {
      if(!res.ok) {
        if(res.status >= 400 && res.status < 500) {
          return res.json().then(data => {
            let error = { errorMessage: data.message };
            throw error;
          })
        }
        else {
          let error = { errorMessage: "Please try again later, server is not responding" };
          throw error;
        }
      }
      return res.json();
    })
    .then(todos => this.setState({todos}));
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem
        key={todo._id}
        {...todo}
      />
    ));
    return (
      <div>
        <h1>Todo List!</h1>

        <TodoForm />

        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;
