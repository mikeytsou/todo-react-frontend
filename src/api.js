const URL = 'https://afternoon-dawn-27478.herokuapp.com/api/todos';

// GET
export function getTodos() {
  return fetch(URL)
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
  });
}

// POST
export function createTodo(todo) {
  return fetch(URL, {
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
  });
}

// DELETE
export function removeTodo(id) {
  const deleteURL = `${URL}/${id}`;

  return fetch(deleteURL, {
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
  });
}

// PUT
export function updateTodo(todo) {
  const updateURL = `${URL}/${todo._id}`

  return fetch(updateURL, {
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
  });
}