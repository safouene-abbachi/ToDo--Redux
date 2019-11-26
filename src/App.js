import React from "react";
import AddToDo from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import EditPart from "./components/EditPart";

const App = () => (
  <div>
    <AddToDo />
    <TodoList />
    <EditPart />
  </div>
);

export default App;
