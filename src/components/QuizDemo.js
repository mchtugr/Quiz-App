import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Formik, Field, Form } from 'formik';

import history from '../history'


import { fetchQuiz, submitQuiz } from '../actions'

export class QuizDemo extends Component {
    // -----local state-----
    state = {index: 0};

    componentDidMount() {
        // if the user did not select quiz settings, the page does not fetch quizzes.
        !_.isEmpty(this.props.setting) && this.props.fetchQuiz(this.props.setting)
    }

    handleNext = () => {
            let newIndex = this.state.index + 1
            this.setState({index : newIndex})
    }

    handlePrev = () => {
            let newIndex = this.state.index - 1
            this.setState({index : newIndex})
    }

    submitQuizResults = (values) => {
        let results = { 
            score : 0, 
            correct: 0, 
            false: 0
        };

        let questionIndex = 0;


        for(const key in values){
            console.log(this.props.questions[questionIndex])
            // check the answers acc. to fetched quiz questions
            if(this.props.questions[questionIndex].correctOption === values[key]){
                results.score++;
                results.correct++;
            } else {
                results.false++;
            }
            questionIndex += 1;
        }

        // send the results obj to redux state.
        this.props.submitQuiz(results)
        //redirect route to '/summary' page.
        history.push('/summary')
    }

    renderQuestion = () => {
        // if no question fetched, return homepage link
        if(this.props.questions.length ===0 ){
            return(
                <button 
                    className='btn quiz-btn' 
                    onClick={() => history.push('/')} 
                    style={{ margin:'0 auto' }}
                > 
                    Go Home 
                </button>
            )
        } else {
        const {questionBody, options, id} = this.props.questions[this.state.index]
        
        return (
            <div className='grid'>
                <h3 className='text-center p-3'> Question - {this.state.index +1} / {this.props.questions.length}</h3>
                <div className="contentt">
                    <div id='quiz-screen' className='quiz-container'>
                        <Formik
                            initialValues={{}}
                            onSubmit={this.submitQuizResults}
                            id='demo'
                        >
                            <Form>
                                    <div className='question-body'>{questionBody}</div>
                                    <div className="options-container">
                                        <Field type='radio' id='A' name={id} value={options[0]} className='hide'/>
                                        <label htmlFor='A' className='option'>{options[0]}</label>
                                    
                                        <Field type='radio' id='B' name={id} value={options[1]} className='hide'/>
                                        <label htmlFor='B' className='option'>{options[1]}</label>
                                    
                                        <Field type='radio' id='C' name={id} value={options[2]} className='hide'/>
                                        <label htmlFor='C' className='option'>{options[2]}</label>
                                    
                                        <Field type='radio' id='D' name={id} value={options[3]} className='hide'/>
                                        <label htmlFor='D' className='option'>{options[3]}</label>
                                    </div>
                                    <div className="button-container">
                                        {this.state.index>0 && <button type='button' className='btn quiz-btn' onClick={this.handlePrev}>Previous</button>}
                                                {this.state.index < this.props.questions.length -1 && <button type='button' className='btn quiz-btn' onClick={this.handleNext}>Next</button>}
                                                {this.state.index === this.props.questions.length -1 && <button type='submit' className='btn quiz-btn'>Submit</button>}
                                    </div>
                            </Form>
                        </Formik> 
                    </div>
                </div>
            </div>
        )
        }
    }
    render() {
        return (
            <>
                { this.renderQuestion()}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        // returns an array of questions
        questions : Object.values(state.questions),
        setting : state.details.setting
    }
}

export default connect( mapStateToProps, { fetchQuiz, submitQuiz })(QuizDemo)

