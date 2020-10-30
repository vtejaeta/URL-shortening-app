import React from 'react'
import Body from './components/body-main/Body'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login-page/Login'
import Signup from './components/sign-up/Signup'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={Body} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Signup} exact />
      </Router>
    </div>
  )
}

export default App
