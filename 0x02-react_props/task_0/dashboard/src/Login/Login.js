import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Login.css';

function Login() {
    return (
        <>
            <section className='form-inputs'>
                <section className='input'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' />
                </section>
                <section className='input'>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' />
                </section>
                <button>OK</button>
            </section>
        </>
    );
}