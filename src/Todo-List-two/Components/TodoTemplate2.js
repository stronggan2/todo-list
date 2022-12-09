import React from "react";
import "../Style/TodoTemplate2.scss";

const TodoTemplate2 = ({ children }) => {
  return (
    <div className="TodoTemplate2">
      <div className="appTitle">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate2;
