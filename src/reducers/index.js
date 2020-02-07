import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    isLogged: loggedReducer
});

export default allReducer;