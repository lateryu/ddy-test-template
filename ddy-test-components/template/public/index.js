import React from 'react';
import ReactDOM from 'react-dom';
import My from './react.jsx';
import About from './about.jsx';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( <div><My /> </div> );
    }
}

ReactDOM.render((<Router history={history}>
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/About' exact component={About}/>
    </Switch>
</Router>), document.getElementById('app'));