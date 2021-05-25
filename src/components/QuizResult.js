import React from 'react';
import { connect } from 'react-redux';
import history from '../history'

const QuizResult = (props) => {
    return (
        <div className="flex-container">
            <div className='quiz-container'>
                <h2 className="summary-message">
                    {   
                        // if result state is not empty, return the result
                        props.results ? 
                            `${props.results.correct} correct answer${props.results.correct>1 ? 's' : ''}` 
                            //else redirect homepage
                            : history.push('/')
                    }
                </h2>
                <button 
                    className='btn home-btn' 
                    onClick={() => history.push('/')} 
                > 
                    Go Home 
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        results : state.details.results
    }
}

export default connect(mapStateToProps)(QuizResult)
