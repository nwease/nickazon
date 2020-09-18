import React, {useState} from 'react';
import '../css/Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => { // SUCCESSFULL NEW USER CREATED
            console.log(auth);

            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='Amazon Logo'
                />
            </Link>

            <div className='login__container'>
                <h1>
                    Sign-in
                </h1>

                <form action=''>
                    <h5>
                        E-Mail
                    </h5>

                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>
                        Password
                    </h5>

                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button onClick={signIn} type='submit' className='login__signInButton'>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale.
                    Please see our privacy notice, our cookies notice and our Interest-Based Ads notice.
                </p>

                <button onClick={register} className='login__createButton'>
                    Create an Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
