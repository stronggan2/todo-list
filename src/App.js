import React, { useState, useRef } from "react";
import TodoTemplate from "./TodoApp/components/TodoTemplate";
import TodoInsert from "./TodoApp/components/TodoInsert";
import TodoList from "./TodoApp/components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "리액트 기초 공부하기",
    //   status: true,
    // },
    // {
    //   id: 2,
    //   text: "포트폴리오 만들기",
    //   status: true,
    // },
    // {
    //   id: 3,
    //   text: "프로젝트 준비하기",
    //   status: false,
    // },
  ]);

  const insertHandler = (item) => {
    const todo = {
      id: nextId.current,
      text: item,
      status: false, // 체크 됐는지 안됐는지
    };
    setTodos([...todos, todo]); // 기존에 있던 todo 통으로 복사 + 새로 만든 객체

    nextId.current += 1;
  };

  const nextId = useRef(1);
  // 지금은 위에 3가지가 있으니까 4!
  const removeHandler = (deleted) =>
    setTodos(todos.filter((prevTodo) => prevTodo.id !== deleted));

  const updateHandler = (updated) =>
    setTodos(
      todos.map((prevTodo) => (prevTodo.id === updated.id ? updated : prevTodo))
    );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert insertItem={insertHandler} />
        <TodoList
          todos={todos}
          removeItem={removeHandler}
          updateItem={updateHandler}
        />
      </TodoTemplate>
    </div>
  );
};

export default App;
