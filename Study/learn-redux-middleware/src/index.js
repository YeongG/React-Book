import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(logger,ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('root'));