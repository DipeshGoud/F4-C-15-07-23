import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');

    function signUpSubmit(event) {
        event.preventDefault();

        // Reset status
        setStatus('');

        // form validation
        if (!name) {
            setStatus('Error: Name is required');
        } else if (!email) {
            setStatus('Error: Email is required');
        } else if (!password) {
            setStatus('Error: Password is required');
        } else if (!confirmPassword) {
            setStatus('Error: Confirm Password is required');
        } else if (password !== confirmPassword) {
            setStatus('Error: Please Make sure your passwords and confirm passwords match!');
        } else {
            setStatus('Successfully Created!');
        }
    }

    return (
        <div>
            <form onSubmit={signUpSubmit}>
                <input type='text' placeholder='Full Name' value={name} onChange={(event) => setName(event.target.value)}></input>
                <input type='email' placeholder='Email Address' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <input type='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}></input>
                <button type="submit" className='btn'>Sign Up</button>
            </form>
            <div className={`center status ${status === 'Successfully Created!' ? 'success' : 'error'}`}>{status}</div>
        </div>
    )
}


export default Form;