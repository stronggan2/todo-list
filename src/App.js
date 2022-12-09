import React, { useState, useRef } from "react";
import TodoTemplate2 from "./Todo-List-two/Components/TodoTemplate2";
import TodoInsert2 from "./Todo-List-two/Components/TodoInsert2";
import TodoList2 from "./Todo-List-two/Components/TodoList2";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "1분 자기소개 암기",
      status: true,
    },
    {
      id: 2,
      text: "포트폴리오 만들기",
      status: true,
    },
    {
      id: 3,
      text: "조별 프로젝트 질문 준비",
      status: false,
    },
  ]);

  const nextId = useRef(4);
  const insertHandler = (item) => {
    const todo = {
      id: nextId.current,
      text: item,
      status: false,
    };

    setTodos([...todos, todo]);

    nextId.current += 1;
  };

  const removeHandler = (deleted) =>
    setTodos(todos.filter((prevTodo) => prevTodo.id !== deleted));

  const updateHandler = (updated) =>
    setTodos(
      todos.map((prevTodo) =>
        prevTodo.id === updateHandler.id ? updated : prevTodo
      )
    );
  return (
    <div>
      <TodoTemplate2>
        <TodoInsert2 insertItem={insertHandler} />
        <TodoList2
          todos={todos}
          removeItem={removeHandler}
          updateItem={updateHandler}
        />
      </TodoTemplate2>
    </div>
  );
};
export default App;
