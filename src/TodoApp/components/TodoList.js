import React from 'react';
import TodoListItem from './TodoListItem'
import '../style/TodoListItem.scss'

const TodoList = (props) => {
  const {todos, removeItem, updateItem} = props;

  return (
    <div className='TodoList'>
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}

      {
        todos.map(todo => <TodoListItem todo={todo}
          key={todo.id} removeItem={removeItem} updateItem={updateItem}/>)
          // map을 그리려면 key가 필요

      }
    </div>
  );
};

export default TodoList;