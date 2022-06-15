import React, { useState } from 'react';
import { validateEmail } from './helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // function that sends messages to user when they click out of a field
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    // fires when submit is clicked by user
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className='card'>
            <h1 className='retro-header'>Contact Me</h1>
            <p className='card-text'>
                Email me here:
                <br />
                <a href="mailto:jonathantprill@gmail.com" className="retro-email-text">
                    jonathantprill@gmail.com
                </a>
            </p>

        </div>
    )
}
export default Contact;