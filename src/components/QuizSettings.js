import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { handleQuizSetting } from '../actions';
import history from '../history';


const validationSchema = Yup.object().shape({
    grade: Yup.string()
        .required('Required!')
})

const QuizSettings = (props) => {

    const handleSubmit = values => {
        props.handleQuizSetting(values);
        history.push('/quiz-page');
    }

    return (
        <>
        <div className="flex-container">
            <div className='quiz-container quiz-settings'>
                <Formik 
                    initialValues={{
                        grade: '5', 
                        questionNumber: '10', 
                        unit: '1'
                    }}
                    onSubmit={ handleSubmit }
                    validationSchema={ validationSchema }
                >  
                    {( { errors, touched } ) => (
                        <Form>
                            <div className="input-container">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend col-5">
                                        <label className="input-group-text label" htmlFor="grade">Grade</label>
                                    </div>
                                    <Field as='select' name='grade' className='form-control center'>
                                        <option value='5'>5th Grade</option>
                                        <option value='6'>6th Grade</option>
                                        <option value='7'>7th Grade</option>
                                        <option value='8'>8th Grade</option>
                                    </Field>
                                    <ErrorMessage 
                                        name='grade'
                                        component='div'
                                        className='field-err'
                                    />                             
                                </div>
                            </div>                        
                            <div className="input-container">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend col-5">
                                        <label className="input-group-text label" htmlFor="unit">Unit</label>
                                    </div>
                                    <Field as='select' name='unit' className='form-control center'>
                                        <option value='1'>Unit 1</option>
                                        <option value='2'>Unit 2</option>
                                        <option value='3'>Unit 3</option>
                                        <option value='4'>Unit 4</option>
                                        <option value='5'>Unit 5</option>
                                        <option value='6'>Unit 6</option>
                                        <option value='7'>Unit 7</option>
                                        <option value='8'>Unit 8</option>
                                        <option value='9'>Unit 9</option>
                                        <option value='10'>Unit 10</option>
                                    </Field>
                                    <ErrorMessage 
                                        name='grade'
                                        component='div'
                                        className='field-err'
                                    />                             
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend col-5">
                                        <label className="input-group-text" htmlFor="questionNumber">Question Num</label>
                                    </div>                            
                                    <Field as='select' name='questionNumber' className='form-control center'>
                                        <option value='10'>10</option>
                                        <option value='15'>15</option>
                                        <option value='20'>20</option>
                                        <option value='25'>25</option>
                                    </Field>
                                    <ErrorMessage 
                                        name='questionNumber'
                                        component='div'
                                        className='field-err'
                                    />
                                </div>
                            </div>
                            <button type='submit' className ='btn btn-light submit-btn form-control'>Start Quiz</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        </>
    )
}

export default connect(null, { handleQuizSetting })(QuizSettings)
