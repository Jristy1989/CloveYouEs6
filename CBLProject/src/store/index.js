import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/reducers.js';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunkMiddleware
        ),
    )
);

export default store;