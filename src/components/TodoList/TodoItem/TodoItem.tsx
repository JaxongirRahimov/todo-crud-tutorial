import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../../redux/todo";
import { TodoInterface } from "../../../App";

type TodoItemProps = {
  todo: TodoInterface;
  editTodo: TodoInterface | null;
  getEditTodo: (editTodo: TodoInterface) => void;
  setEditTodo: (editTodo: TodoInterface) => void;
};

const TodoItem = ({
  todo,
  editTodo,
  getEditTodo,
  setEditTodo,
}: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleToggleTodoChange = () =>
    dispatch(toggleTodo({ todoId: todo.id }));
  const handleGetEditTodoClick = () => getEditTodo(todo);
  const handleDeleteTodoClick = () => {
    dispatch(deleteTodo({ todoId: todo.id }));
    if (todo.id === editTodo?.id) {
      setEditTodo({ id: "", task: "", completed: false });
    }
  };

  return (
    <li className="todo-list__item">
      <label
        htmlFor={todo.id}
        style={
          todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className="todo-list__label"
      >
        <input
          onChange={handleToggleTodoChange}
          checked={todo.completed ? true : false}
          type="checkbox"
          id={todo.id}
          className="todo-list__checkbox"
        />
        {todo.task}
      </label>
      <div className="todo-list__btns-box">
        <button
          onClick={handleGetEditTodoClick}
          className="todo-list__btn todo-list__edit-btn"
        >
          <MdModeEditOutline />
        </button>
        <button
          onClick={handleDeleteTodoClick}
          className="todo-list__btn todo-list__delete-btn"
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
