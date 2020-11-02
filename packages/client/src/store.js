import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducers from './reducers/index';

const middleware = applyMiddleware(thunk, promise, logger);

const store = createStore(reducers, middleware);

export default store;