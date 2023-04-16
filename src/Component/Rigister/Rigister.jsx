import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const auth = getAuth(app);
const Rigister = () => {
    // const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');
    const handleSubmit = (event) => {
        // 1.prevent page refresh
        event.preventDefault();
        // protom e jate succes ta empty take ai code.ai code ta catch erro okane o dita pari
        setSucces('');
        // ahger error empty kore dibo
        setError('');
        // 2.collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        // validate
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('please add at least two uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('please add at least two number digit')
            return;
        }
        else if (password.length < 6) {
            setError('please at lest 6 character password')
            return;
        }
        //3.create user in fb
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // erro na kea jodi logd in hoi jai ahger error ta mucar jonno niacar code
                setError('');
                // submit korle jate from kali hoi tai nicar code
                event.target.reset();
                setSucces('user has created successfully');
                sendVeriFicationEmail(user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSucces('');
            })
    }
    const sendVeriFicationEmail =(user)=>{
        sendEmailVerification(result.user)
        .then(result =>{
            console.log(result);
        alert('please verify your email adress')
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
                <input className='w-50 mb-4 rounded' onChange={handleEmailChange} type="email" name='email' id='email' placeholder='your email' required /><br />
                <input className='w-50 mb-4 rounded' onBlur={handlePasswordBlur} type="password" name='password' id='password' placeholder='your password' required /><br />
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{succes}</p>
                <input className='btn btn-primary' type="submit" value='Register' />

            </form>
            <p><small>alredy have an accout? please <Link to="/login">Log in</Link></small></p>
        </div>
    );
};

export default Rigister;