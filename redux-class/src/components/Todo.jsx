// import { useSelector } from "react-redux";
// import AddForm from "./AddForm";
// import { useDispatch } from "react-redux";
// import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

// export default function Todo() {
//   const todos = useSelector((state) => state.todos);
//   console.log(todos);

//   const dispatch = useDispatch();

//   const deleteHandler = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const markAsDoneHandler = (id) => {
//     dispatch(markAsDone(id));
//   };

//   const markAllAsDoneHandler{
//     dispatch(markAsDone)
//   }
//   return (
//     <>
//       <AddForm />
//       <h2>Todos</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
//             >
//               {todo.task}
//             </span>
//             {/* {todo.task}{" "} */}
//             <button onClick={() => deleteHandler(todo.id)}>Delete</button>
//             <button onClick={() => markAsDoneHandler(todo.id)}>
//               Mark as Done
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={markAllAsDoneHandler}>Mark All As Done</button>
//     </>
//   );
// }


import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos); // Select todos from state
  console.log(todos);

  const dispatch = useDispatch();

  // Handle deleting a single todo
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // Handle marking a single todo as done
  const markAsDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  // Handle marking all todos as done
  const markAllAsDoneHandler = () => {
    todos.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(markAsDone(todo.id)); // Dispatch action for each unfinished todo
      }
    });
  };

  return (
    <>
      <AddForm />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            {!todo.isDone && (
              <button onClick={() => markAsDoneHandler(todo.id)}>
                Mark as Done
              </button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={markAllAsDoneHandler}>Mark All As Done</button>
    </>
  );
}
