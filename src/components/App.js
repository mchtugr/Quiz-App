import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import history from '../history';
import QuizStartScreen from './QuizStartScreen';
import CreateQuiz from './CreateQuiz';
import QuizScreen from './QuizScreen';
import QuizDemo from './QuizDemo'
import SummaryPage from './SummaryPage'
import Mun from './Mun';


const App = () => {
    return (
        <>
            <Router history={history}>
                <>
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route path='/' exact component={QuizStartScreen} />
                            <Route path='/demo' exact component={QuizDemo} />
                            <Route path='/summary' exact component={SummaryPage} />
                            <Route path='/create-quiz' exact component={Mun} />
                        </Switch>
                    </div>
                </>
            </Router>
        </>
    )
}

export default App
