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

    this.addTodo = this.addTodo.bind(this);
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

  addTodo(todo) {
    fetch(URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({description: todo})
    })
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
    .then(newTodo => this.setState({todos: [...this.state.todos, newTodo]}));
  }

  deleteTodo(id) {
    const deleteURL = `${URL}/${id}`;

    fetch(deleteURL, {
      method: 'DELETE'
    })
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
    .then(() => {
      const todos = this.state.todos.filter(todo => todo._id !== id);
      this.setState({todos})
    });
  }

  toggleTodo(todo) {
    const updateURL = `${URL}/${todo._id}`

    fetch(updateURL, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({completed: !todo.completed})
    })
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
      <div>
        <h1>Todo List!</h1>

        <TodoForm addTodo={this.addTodo} />

        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;
