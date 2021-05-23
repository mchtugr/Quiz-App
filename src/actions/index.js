import { SIGN_IN, SIGN_OUT, CREATE_QUESTION, FETCH_QUIZ, SUBMIT_QUIZ, HANDLE_QUIZ_SETTING } from './types';
import jsonServer from '../apis/jsonServer';


// Google sign in 
export const signIn = userId => {
    return {
        type:  SIGN_IN,
        payload : userId
    }
}

// Google sign out
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}


// User create a question - method POST
export const createQuestion = formValues => async dispatch => {
    const response = await jsonServer.post('/questions', formValues)
    dispatch({type: CREATE_QUESTION, payload: response.data})
}

// User fetch a custom quiz - method GET
export const fetchQuiz = formValues => async dispatch => {
    const grade = formValues.grade;
    const unit = formValues.unit;
    const response = await jsonServer.get(`/questions?grade=${grade}&unit=${unit}`)
    dispatch({type: FETCH_QUIZ, payload: response.data})
}

// User ends a quiz and see the results
export const submitQuiz = results => {
    return {
        type: SUBMIT_QUIZ,
        payload: results
    }
}


// User select the quiz setting
export const handleQuizSetting = setting => {
    return {
        type: HANDLE_QUIZ_SETTING,
        payload: setting 
    }
}