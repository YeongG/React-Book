const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = () => ({
    type:INCREASE,
})

export const decrease = () => ({
    type:DECREASE,
})

export const increaseAsync = () => ({
    type:INCREASE_ASYNC,
})

export const decreaseAsync = () => ({
    type:DECREASE_ASYNC,
})

function* increaseSaga(){
}

function* decreaseSaga(){

}