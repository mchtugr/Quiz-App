import React from 'react';
import { connect } from 'react-redux';


// const customMessages = {
//     25: 'go and study',
//     50: 'more practice needed',
//     75: 'quite good',
//     100: 'perfect! congratulations'
// }

const SummaryPage = (props) => {
    return (
        <div className='quiz-container'>
            <h2 className="summary-message">
                {`${props.results.correct} correct answer${props.results.correct>1 ? 's' : ''}`}
            </h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        results : state.details.results
    }
}

export default connect(mapStateToProps)(SummaryPage)
