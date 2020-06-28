import React from 'react';
import Counter from '../Component/Counter';
import {connect} from 'react-redux';
import {
    increase,
    decrease
} from '../modules/counter';

const CounterContainer = ({
    onIncrease,
    onDecrease,
    number
}) => {
    console.log("CounterContainer 랜더링");
    return <Counter 
        number={number}
        onDecrease={onDecrease}
        onIncrease={onIncrease}  
    />
}

const mapStateToProps = state => {
    return {
        number:state.counter.number,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrease:() => dispatch(increase()),
        onDecrease:() => dispatch(decrease()),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);