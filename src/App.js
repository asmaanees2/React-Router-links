import React from 'react'
import "./App.css"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import AppRouter from './config/Router'

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App;

