import React from 'react'
import Home from "../components/Home"
import { useNavigate } from 'react-router-dom';
import AppRouter from '../config/Router'
function login() {
    return (
        <div>
            <div className='container '>
                <h1>Login</h1>
                <input type={'text'} placeholder="Your Name" />
                <br />
                <input type={'password'} maxLength='11' placeholder="Password" />
                <br /><br /><br /><br />

                <button id="button">Login</button>
            </div>
        </div>
    )
}
export default login;