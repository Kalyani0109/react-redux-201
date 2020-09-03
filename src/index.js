import React from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import ConfigStore from './redux/configStore';
import { Provider as ReduxProvider} from 'react-redux'

const store = ConfigStore();
render(  
    <ReduxProvider store={store}>
    <Router>
        <App/>
    </Router>
    </ReduxProvider>, 
document.getElementById('app'));