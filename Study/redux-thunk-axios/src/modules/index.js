import { combineReducers } from 'redux';
import sampleReducer from '../modules/sample';

const rootReducer = combineReducers({
    sample:sampleReducer,
});

export default rootReducer;