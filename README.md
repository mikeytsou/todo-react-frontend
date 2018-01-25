# Todo React Frontend

__Getting Setup__

In the terminal, clone the repo and run:

```sh
npm install
npm start
```

Or visit app deployed onto Heroku: https://intense-atoll-85891.herokuapp.com/

![](/public/images/github_todo_front_end.png)

___

This is a simple todo front-end web application created with React and makes HTTP requests using fetch to a backend Express REST API I created.

The repository for the todoAPI can be found here: https://github.com/mikeytsou/todoAPI

**Three main components**

The TodoList component holds the application state so all the functions that handle API calls happen in there. I cleaned it up a little bit and moved all the logic into a seperate api.js file. All the ```apiCalls``` are calling a function that uses fetch to make an HTTP request to the REST API. These functions handle errors andreturn a promise in json format. The promise is then looped and manipulated in some way depending on the method. The state is updated and the component is then rerendered.

The TodoItem component is a stateless functional component that just displays the todo. It is passed the deleteTodo and toggleTodo functions as props and wrapped in onClick events. There is also some conditional styling for toggling todos based on the completions of todos passed in as props.

The TodoForm component has it's own state that keeps track of the input value. It is passed the addTodo function as props and it takes care of the change in input and submitting the todo. The handleChange function updates the state input value and handleSubmit calls the addTodo function that was passed as props.
