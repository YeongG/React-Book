import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const App = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                {number}
            </div>
            <div>
                <button onClick={() => dispatch(increaseAsync())}>+</button>
                <button onClick={() => dispatch(decreaseAsync())}>-</button>
            </div>
        </>
    );
}

export default App;