import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import techsReducer from './techsReducer';

const rootReducer = combineReducers({
    authenticationReducer: authenticationReducer,
    techsReducer: techsReducer
});

export default rootReducer;