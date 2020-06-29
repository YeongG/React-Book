import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increase,
    decrease
} from '../modules/counter';

const Counter = () => {
    console.log("Counter 랜더링");
    const number = useSelector(state => state.counter.number);
    
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => {
        dispatch(increase());
    },[]);
    const onDecrease = useCallback(() => {
        dispatch(decrease());
    },[]);

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick = {onIncrease}>+1</button>
                <button onClick = {onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default memo(Counter);