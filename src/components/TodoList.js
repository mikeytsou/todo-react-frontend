import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from '../api';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  componentWillMount() {
    this.loadTodos();
  }

  loadTodos() {
    apiCalls.getTodos()
    .then(todos => this.setState({todos}));
  }

  addTodo(todo) {
    apiCalls.createTodo(todo)
    .then(newTodo => this.setState({todos: [...this.state.todos, newTodo]}));
  }

  deleteTodo(id) {
    apiCalls.removeTodo(id)
    .then(() => {
      const todos = this.state.todos.filter(todo => todo._id !== id);
      this.setState({todos})
    });
  }

  toggleTodo(todo) {
    apiCalls.updateTodo(todo)
    .then(updatedTodo => {
      const todos = this.state.todos.map(todo =>
        todo._id === updatedTodo._id ? {...todo, completed: !todo.completed} : todo
      );
      this.setState({todos});
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem
        key={todo._id}
        {...todo}
        onDelete={this.deleteTodo.bind(this, todo._id)}
        onToggle={this.toggleTodo.bind(this, todo)}
      />
    ));
    return (
      <div className="container">
        <h1>Todo<span>List</span></h1>

        <h2>A todo list built with express, mongodb, and react</h2>

        <TodoForm addTodo={this.addTodo} />

        <ul className="list">
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;
