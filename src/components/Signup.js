import "../App.css"
// import { Link , Route , Routes } from 'react-router-dom';
import Login from "../components/Login"
import Home from "../components/Home"
import AppRouter from '../config/Router'

function Signup() {

    return (
        <>
            <div className='container'>
                <h1>Sign Up</h1>
                <input type={'text'} placeholder="First Name" />
                <br />
                <input type={'text'} placeholder="Last Name" />
                <br />
                <input type={'password'} maxLength='11' placeholder="Password" />
                <br />
                <input type={'password'} maxLength='11' placeholder="Conform Password" />
                <br /><br /><br />
                <button id="button">Sign Up</button>
                <br />
            </div>
        </>
    )
}

export default Signup;