import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer, 
    compose(applyMiddleware(thunk),
    composeWithDevTools())
);

export default store;