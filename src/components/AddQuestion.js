import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { createQuestion } from '../actions'


const QuizSchema = Yup.object().shape({
  questionBody: Yup.string()
    .min(2, '*must be longer than 2 characters!')
    .required('*Required!'),
  option1: Yup.string()
    .min(2, '*must be longer than 2 characters!')
    .required('*Required!'),
  option2: Yup.string()
    .min(2, '*must be longer than 2 characters!')
    .required('*Required!'),
  option3: Yup.string()
    .min(2, '*must be longer than 2 characters!')
    .required('*Required!'),
  option4: Yup.string()
    .min(2, '*must be longer than 2 characters!')
    .required('*Required!'),
  correctAnswer: Yup.string()
    .required('*Select the correct option!')
})

const RadioButton = ({
  field,
  ...props
}) => {
  return (
    <div>
      <input type='radio' {...field} {...props} className='radio-button'/>
    </div>
  );
};

const MyTextArea = ({
    field, // { name, value, onChange, onBlur }
    ...props
 }) => (
   <div>
     <textarea {...field} {...props} />
   </div>
 );


const AddQuestion = (props) => {


    const handleQuestionSubmit = (values) => {
      console.log(values)
      if(values.correctAnswer==null){
        console.log('empty')
      }
      const demo = {
        questionBody : values.questionBody,
        correctOption : values.correctAnswer,
        grade : values.grade,
        unit : values.unit,
        options : [values.option1, values.option2, values.option3, values.option4]
      }
      props.createQuestion(demo);
    }

    return (
      <div className='grid'>
        <h3 className='text-center p-3'>Create a Question</h3>
        <div className="flex-container">
          <div className='quiz-container'>
            <Formik
              initialValues={{
                questionBody: '', 
                option1: '', 
                option2: '', 
                option3: '', 
                option4: '', 
                correctAnswer: '', 
                grade: '5', 
                unit: '1' 
              }}
              onSubmit={handleQuestionSubmit}
              validationSchema={QuizSchema}
            >
              {( {errors, touched, values }) => (
                <Form>
                  <div className='row'>
                    <Field name='questionBody' placeholder='Enter your question' className='form-control question-textarea' as={MyTextArea}/>
                    <ErrorMessage name='questionBody' component='div' className='field-err' />
                  </div>
                  <br/>
                  <div id='options' className="options-container row mb-3">
                      <div className="optionn">
                        <Field component={RadioButton} name='correctAnswer' value={values.option1} label='A' />
                        <Field name='option1' type='text' placeholder='Option 1' className='form-control'/>
                        <ErrorMessage name='option1' component='div' className='field-err'/>
                      </div>
                      <div className="optionn">
                        <Field component={RadioButton} name='correctAnswer' value={values.option2} label='B' />
                        <Field name='option2' type='text' placeholder='Option 2' className='form-control'/>
                        <ErrorMessage name='option2' component='div' className='field-err'/>
                      </div>
                      <div className="optionn">
                        <Field component={RadioButton} name='correctAnswer' value={values.option3} label='C' />
                        <Field name='option3' type='text' placeholder='Option 3' className='form-control'/>
                        <ErrorMessage name='option3' component='div' className='field-err'/>
                      </div>
                      <div className="optionn">
                        <Field component={RadioButton} name='correctAnswer' value={values.option4} label='D' />
                        <Field name='option4' type='text' placeholder='Option 4' className='form-control'/>
                        <ErrorMessage name='option4' component='div' className='field-err'/>
                      </div>
                  </div>
                  <ErrorMessage name='correctAnswer' component='div' className='field-err' />
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="grade" className='label-center'>Grade</label>
                      <Field as='select' name='grade' className='form-control'>
                          <option value="5">5th Grade</option>
                          <option value="6">6th Grade</option>
                          <option value="7">7th Grade</option>
                          <option value="8">8th Grade</option>
                      </Field>  
                    </div>
                    <div className="col">
                      <label htmlFor="unit" className='label-center'>Unit</label>
                      <Field as='select' name='unit' className='form-control'>
                          <option value="1">Unit 1</option>
                          <option value="2">Unit 2</option>
                          <option value="3">Unit 3</option>
                          <option value="4">Unit 4</option>
                          <option value="5">Unit 5</option>
                          <option value="6">Unit 6</option>
                          <option value="7">Unit 7</option>
                          <option value="8">Unit 8</option>
                          <option value="9">Unit 9</option>
                          <option value="10">Unit 10</option>
                      </Field>         
                    </div>
                  </div>
                  <div className="button-container">
                    <button type='submit' className='btn quiz-btn'>Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        </div>
    )
}

export default connect(null, { createQuestion })(AddQuestion)
