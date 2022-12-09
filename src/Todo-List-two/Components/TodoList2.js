import React from "react";
import TodoListItem2 from "./TodoListItem2";
import "../Style/TodoList2.scss";

const TodoList2 = (props) => {
  const { todos, removeItem, updateItem } = props;

  return (
    <div className="TodoList2">
      {todos.map((todo) => (
        <TodoListItem2 todo={todo} key={todo.id} removeItem={removeItem} updateItem={updateItem}/>
      ))}
    </div>
  );
};

export default TodoList2;
