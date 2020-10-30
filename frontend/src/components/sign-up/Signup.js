import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header/Header'
import Error from '../error/Error'
import { Link } from 'react-router-dom'
import { register } from '../../actions/userActions'
import './signup.css'
import Footer from '../footer/Footer'

const Signup = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { error, userInfo } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo: userInfoLogin } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo || userInfoLogin) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect, userInfoLogin])

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value)
  }

  const signupHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorPassword("Passwords don't match")
    } else {
      setErrorPassword('')
      dispatch(register(name, email, password))
    }
  }

  return (
    <>
      <Header />
      <main className='signup-wrapper'>
        <section className='signup-form-wrapper'>
          <h1 className='signup-heading'>Sign Up</h1>
          {errorPassword && <Error>{errorPassword}</Error>}
          {error && <Error>{error}</Error>}
          <form action='' className='signup-form' onSubmit={signupHandler}>
            <label htmlFor='name' className='signup-name-label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter full name'
              className='signup-name'
              autoComplete='off'
              onChange={nameHandler}
            />
            <label htmlFor='email' className='signup-email-label'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              autoComplete='off'
              placeholder='Enter email'
              className='signup-email'
              onChange={emailHandler}
            />
            <label htmlFor='password' className='signup-password-label'>
              Password
            </label>
            <input
              type='password'
              autoComplete='off'
              className='signup-password'
              placeholder='Enter password'
              onChange={passwordHandler}
            />
            <label
              htmlFor='confirmPassword'
              className='signup-confirm-password-label'
            >
              Confirm Password
            </label>
            <input
              type='password'
              autoComplete='off'
              className='signup-confirm-password'
              placeholder='Confirm your password'
              onChange={confirmPasswordHandler}
            />
            <button className='login-submit-btn'>SIGN UP</button>
            <p className='login-new-customer'>
              Already a customer? <Link to='/login?redirect=/'>Login here</Link>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Signup
