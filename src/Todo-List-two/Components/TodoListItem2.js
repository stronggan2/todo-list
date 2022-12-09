import React from "react";
import { FaTrash } from "react-icons/fa";
import "../Style/TodoListItem2.scss";

const TodoListItem2 = (props) => {
  const { todo, removeItem, updateItem } = props;

  const changeHandler = (e) => {
    const checked = e.target.checked ? true : false;
    updateItem({ ...todo, staus: checked });
  };

  return (
    <div className="TodoListItem2">
      <div className="todo">
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.staus === true}
          onChange={changeHandler}
        />
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => removeItem(todo.id)}>
        <FaTrash />
      </div>
    </div>
  );
};

export default TodoListItem2;
