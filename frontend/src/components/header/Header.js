import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../images/logo.svg'
import './header.css'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'

const Header = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <header className='header'>
      <section className='header-logo'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </section>
      {userInfo ? (
        <section className='header-login-section'>
          <div className='header-login username'>
            <p>{`Hi ${userInfo.name}`}</p>
          </div>
          <form onSubmit={logoutHandler}>
            <button className='header-signup'>Logout</button>
          </form>
        </section>
      ) : (
        <section className='header-login-section'>
          <Link to='/login?redirect=/'>
            <div className='header-login'>
              <p>Login</p>
            </div>
          </Link>
          <Link to='/signup?redirect=/'>
            <button className='header-signup'>Sign Up</button>
          </Link>
        </section>
      )}
    </header>
  )
}

export default Header
