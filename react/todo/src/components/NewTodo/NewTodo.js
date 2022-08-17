import { useState } from "react";

function NewTodo() {
  const [id, setID] = useState();
  const [userid, setUserID] = useState();
  const [title, setTitle] = useState("");
  const [isCompleted, setCompleted] = useState(false);

  function handleFormSubmit(event) {
    console.log("Handling form submit...");
    const newToDo = {
      id: id,
      userId: userid,
      title: title,
      completed: isCompleted,
    };
    console.log(newToDo);
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="number"
            className="form-control"
            id="todoid"
            name="todoid"
            onChange={(event) => {
              setID(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            User ID
          </label>
          <input
            type="number"
            className="form-control"
            id="userID"
            name="userID"
            onChange={(event) => {
              setUserID(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isCompleted"
            id="completed"
            onChange={() => {
              setCompleted(true);
            }}
          />
          <label className="form-check-label" htmlFor="isCompleted">
            Completed
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isCompleted"
            id="notCompleted"
            checked
            onChange={() => {
              setCompleted(false);
            }}
          />
          <label className="form-check-label" htmlFor="isCompleted">
            Not Completed
          </label>
        </div>
        <hr />
        <button type="submit" className="btn btn-success float-end">
          Save
        </button>
      </form>
    </div>
  );
}

export default NewTodo;
