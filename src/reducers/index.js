import { combineReducers } from 'redux';

import authReducer from './authReducer';
import {detailsReducer, quizReducer} from './quizReducer';


export default combineReducers({
    auth : authReducer,
    questions : quizReducer,
    details : detailsReducer
})