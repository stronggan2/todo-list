import React from "react";
import "../style/TodoInsert.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input type="text" placeholder="일정을 입력하세요" />
      <button type="submit">
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
