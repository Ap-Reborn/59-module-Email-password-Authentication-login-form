import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const auth = getAuth(app);
const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogIn = (event) => {
        // jate login form load na hoi
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // validation
        // porer bar submite jate set error na dekai
        setError('');
        // email and pass er modde required dibo jate empty submit korte na pare
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('please add atlest two uppercase')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('please add a special character');
            return;
        }
        else if (password.length < 6) {
            setError('please at lest 6 character password')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if(!loggedUser.emailVerified){
                    alert('not veryfied yet')
                }
                setSuccess('user login successfully');
                setError('');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <h2>please log in</h2>
            <form onSubmit={handleLogIn} className="mx-auto w-25">
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' className="form-control mb-3 " id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control mb-3" id="password" placeholder="Password" required />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p><small>new to this website ?please <Link to="/register">Register</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;