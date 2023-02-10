import React from 'react'
import Signup from "../components/Signup"
import Login from "../components/Login"
import Home from "../components/Home"
import { BrowserRouter, Link, Route, Routes ,  } from 'react-router-dom'

function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <nav>
                <ul>
            <li>
                <Link to="sigup">Sign up</Link>
                <br />
                <Link to="login">Login</Link>
                <br />
                <Link to="home">Home</Link>
            </li>
                {/* <br /> */}
                
        </ul>
        </nav>

        <Routes>
            <Route path='sigup' element={<Signup/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;
