import React from "react";
import { RxMinusCircled } from "react-icons/rx";
import "../style/TodoListItem.scss";

const TodoListItem = (props) => {
  const { todo, removeItem, updateItem } = props;

  const changeHandler = (e) => {
    const checked = e.target.checked ? true : false;
    updateItem({ ...todo, status: checked });
  };

  return (
    <div className="TodoListItem">
      <div className="todo">
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.status === true}
          onChange={changeHandler}
        />
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => removeItem(todo.id)}>
        <RxMinusCircled />
      </div>
    </div>
  );
};

export default TodoListItem;
