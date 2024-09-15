import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState(""); // Correctly use the array destructuring
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task); // Logs the current task input value
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task} // Bind the input's value to the task state
          onChange={(e) => setTask(e.target.value)} // Update task state on input change
        />
        <button>Add Task</button>
      </form>
    </>
  );
}
