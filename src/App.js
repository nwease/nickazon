import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import {auth} from './firebase';
import {useStateValue} from './Provider';
import Payment from './pages/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_5ofIzCRXDJDsAD1BHnvh7rC4');

function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS', authUser);

            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/orders'>
                        <Header/>
                        <Orders/>
                    </Route>

                    <Route path='/login'>
                        <Login/>
                    </Route>

                    <Route path='/checkout'>
                        <Header/>
                        <Checkout/>
                    </Route>

                    <Route path='/payment'>
                        <Header/>

                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>

                    <Route path='/'>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
