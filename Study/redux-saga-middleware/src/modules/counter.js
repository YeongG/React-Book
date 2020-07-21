import {
    delay,
    put,
    takeEvery,
    takeLatest,
    call
} from 'redux-saga/effects';

const INCREASE = "counter/INCREASE"; 
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

const increase = () => ({
    type:INCREASE,
})

const decrease = () => ({
    type:DECREASE,
})

export const increaseAsync = () => ({
    type:INCREASE_ASYNC,
})

export const decreaseAsync = () => ({
    type:DECREASE_ASYNC,
})

function* increaseSaga(){
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga(){
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC,increaseSaga);
    yield takeLatest(DECREASE_ASYNC,decreaseSaga);
}

const counterReducer = (state = 0,action) => {
    switch(action.type) {
        case INCREASE:
            return ++state;
        case DECREASE:
            return --state;
        default:
            return state;
    }
}

export default counterReducer;