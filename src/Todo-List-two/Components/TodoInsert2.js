import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "../Style/TodoInsert2.scss";

const TodoInsert2 = ({ insertItem }) => {
  const [item, setItem] = useState("");
  const changeHandler = (e) => setItem(e.target.value);
  const submitHandler = (e) => {
    // 페이지 새로고침 방지
    e.preventDefault();

    if (item.trim() === "") {
      // item.focus(); 사용하고 싶으면 어떻게..ㅠㅠ
      return;
    }
    insertItem(item);
    setItem("");
  };

  return (
    <div>
      <form className="TodoInsert2" onSubmit={submitHandler}>
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
    </div>
  );
};

export default TodoInsert2;
