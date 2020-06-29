import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import {
    changeInput,
    insert,
    remove,
    toggle
} from '../modules/todos';

const Todos = () => {
    console.log("TODOS");
    const { input, todos } = useSelector(state => state.todos);

    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)),[dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);

    const onChange = e => onChangeInput(e.target.value);
    const onSubmit = useCallback(e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput("");
    },[input]);
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