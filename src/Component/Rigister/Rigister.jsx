import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';
const auth =getAuth(app);
const Rigister = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        // create user in fb
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleEmailChange = (event) => {
        console.log(event.target.value);
        // setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>please register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded'  onChange={handleEmailChange} type="email" name='email' id='email' placeholder='your email' /><br />
                <input className='w-50 mb-4 rounded' onBlur={handlePasswordBlur} type="password" name='password' id='password' placeholder='your password' /><br />
                <input className='btn btn-primary' type="submit" value='Register' />

            </form>
        </div>
    );
};

export default Rigister;