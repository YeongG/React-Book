import React, { memo } from 'react';

const TodoItem = ({todo,onToggle,onRemove}) => {
    console.log("TodoItem 랜더링");
    return (
        <div>
            <input type="checkbox" 
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{textDecoration:todo.done ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};

export default memo(TodoItem);