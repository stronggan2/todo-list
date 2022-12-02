import React, { useState } from "react";
import "../style/TodoInsert.scss";
import { IoIosAddCircle } from "react-icons/io";

const TodoInsert = ({ insertItem }) => {
  const [item, setItem] = useState("");
  const changeHandler = (e) => setItem(e.target.value);
  const submitHandler = (e) => {
    // 페이지 새로고침 방지
    e.preventDefault();

    if (item.trim() === "") {
      return;
    }
    insertItem(item);
    setItem("");
  };

  return (
    <form className="TodoInsert" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="일정을 입력하세요"
        value={item}
        onChange={changeHandler}
      />

      <button type="submit">
        <IoIosAddCircle />
      </button>
    </form>
  );
};

export default TodoInsert;
