import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import filters from '../reducers/filters';
import heroes from '../reducers/heroes';

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }

    return next(action);
};

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const oldDispatch = store.dispatch;

    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return oldDispatch({
                type: action
            })
        }

        return oldDispatch(action);
    }

    return store;
}

const store = createStore(combineReducers({heroes, filters}), compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;