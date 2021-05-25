import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import history from '../history';
import QuizSettings from './QuizSettings';
import QuizScreen from './QuizScreen'
import QuizResult from './QuizResult'
import AddQuestion from './AddQuestion';


const App = () => {
    return (
        <>
            <Router history={history}>
                <>
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route path='/' exact component={QuizSettings} />
                            <Route path='/quiz-page' exact component={QuizScreen} />
                            <Route path='/result' exact component={QuizResult} />
                            <Route path='/add-question' exact component={AddQuestion} />
                        </Switch>
                    </div>
                </>
            </Router>
        </>
    )
}

export default App
