import React, { memo } from 'react';
import TodoItem from './TodoItem';

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    console.log("Todos 랜더링");
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput("");
    }
    const onChange = e => onChangeInput(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem 
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(Todos);