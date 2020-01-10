import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';

export default function configureStore(initialState={}) {
    const middleWare = [thunk, logger];

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare))
    );
}
