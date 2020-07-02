const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const TWO = "counter/TWO";

const initialState = 0;

const increase = () => ({
    type:INCREASE,
});

const decrease = () => ({
    type:DECREASE
});

const two = () => ({
    type:TWO
})

export const actionCreaters = {
    increase,
    decrease,
    two,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE:
            return state+1;
        case DECREASE:
            return state-1;
        case TWO:
            return state*2;
        default:
            return state;
    }
}

export default counterReducer;
