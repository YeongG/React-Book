import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" render={() => <div>HOME</div>}/>
                <Route exact path="/" render={() => <div>INDEX</div>}/>
                <Route exact path="/About" render={() => <div>About</div>}/>
                <Route render={() => <div>404</div>}/>
            </Switch>
        </Router>
    )
}

export default App;