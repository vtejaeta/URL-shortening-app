import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Error from '../error/Error'
import Header from '../header/Header'
import './login.css'
import { login } from '../../actions/userActions'
import Footer from '../footer/Footer'

const Login = ({ history, location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, history, redirect])

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Header />
      <main className='login-wrapper'>
        <section className='login-form-wrapper'>
          <h1 className='login-heading'>Sign In</h1>
          {error && <Error>{error}</Error>}
          <form action='' className='login-form' onSubmit={loginHandler}>
            <label htmlFor='email' className='login-email-label'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter email'
              className='login-email'
              autoComplete='off'
              onChange={emailHandler}
            />
            <label htmlFor='password' className='login-password-label'>
              Password
            </label>
            <input
              type='password'
              autoComplete='off'
              className='login-password'
              placeholder='Enter password'
              onChange={passwordHandler}
            />
            <button className='login-submit-btn'>SIGN IN</button>
            <p className='login-new-customer'>
              New Customer? <Link to='/signup?redirect=/'>Register here</Link>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Login
