import { useEffect, useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  // Creates a state to store data so that it is not lost when components change.
  const [todos, setTodos] = useState([]);

  // 1. Lifecycle hooks
  // created-> mounted-> rendered-> destroyed

  // Lifecycle hook executes after component is rendered.
  // It will call api to get data for component.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((content) => setTodos(content));
  }, []);

  return (
    <div className="container">
      <a href="/newTodo" className="btn btn-primary float-start">
        New Post
      </a>
      <br /> <br />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
