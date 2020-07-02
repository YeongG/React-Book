import React, { useCallback } from 'react';
import { actionCreaters } from './modules/counter';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => {
        dispatch(actionCreaters.increase());
    },[dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(actionCreaters.decrease());
    },[dispatch]);

    const onTwo = useCallback(() => {
        dispatch(actionCreaters.two());
    },[dispatch])

    return (
        <div>
            <div style={{fontSize:"50px"}}>{number}</div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onTwo}>*2</button>
        </div>
    )
}

export default Counter;