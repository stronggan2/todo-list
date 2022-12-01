import React from "react";
import TodoTemplate from "./TodoApp/components/TodoTemplate";
import TodoInsert from "./TodoApp/components/TodoInsert";

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert />
      </TodoTemplate>
    </div>
  );
};

export default App;
