import { CREATE_QUESTION, FETCH_QUIZ, HANDLE_QUIZ_SETTING, SUBMIT_QUIZ } from '../actions/types';
import _ from 'lodash';

// show the related questions list
export const quizReducer = (state={}, action) => {
    switch(action.type) {
        case CREATE_QUESTION :
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_QUIZ :
            return { ..._.mapKeys(action.payload, 'id')}
        default : 
            return state;
    }
}

// quiz details and quiz results
export const detailsReducer = (state = {}, action) => {
    switch(action.type) {
        case SUBMIT_QUIZ :
            return { results: action.payload}
        case HANDLE_QUIZ_SETTING :
            return {setting : action.payload};        
        default:
            return state;
    }
}
