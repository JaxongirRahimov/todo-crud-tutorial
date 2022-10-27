import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

const App = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [editTodo, setEditTodo] = useState<TodoInterface | null>(null);
  const [todoFilterValue, setTodoFilterValue] = useState("all");

  const getTodoFilterValue = (filterValue: string) =>
    setTodoFilterValue(filterValue);
  const getEditTodo = (editTodo: TodoInterface) => setEditTodo(editTodo);

  return (
    <main className="app">
      <div className="app__wrapper">
        <div className="app__header">
          <h1 className="app__title">Todo App</h1>
        </div>
        <div className="app__inputs-box">
          {editTodo?.id ? (
            <EditTodo editTodo={editTodo} setEditTodo={setEditTodo} />
          ) : (
            <AddTodo />
          )}
          <FilterTodo getTodoFilterValue={getTodoFilterValue} />
        </div>
        <TodoList
          todos={todos}
          todoFilterValue={todoFilterValue}
          getEditTodo={getEditTodo}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </div>
    </main>
  );
};

export default App;
