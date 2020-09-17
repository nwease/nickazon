import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>

                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
