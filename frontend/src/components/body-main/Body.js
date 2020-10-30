import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './body.css'
import desImage from '../../images/illustration-working.svg'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import Error from '../error/Error'
import Footer from '../footer/Footer'
import {
  shortenTheLink,
  getAllLinks,
  deleteTheLink,
} from '../../actions/linkActions'

const Body = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const getLinks = useSelector((state) => state.getLinks)
  const { loading, linksInfo, error } = getLinks

  const dispatch = useDispatch()

  const [link, setLink] = useState('')

  const shortenLink = useSelector((state) => state.shortenLink)
  const { shortLinkInfo, error: shortenLinkError } = shortenLink

  const urlInputHandler = (e) => {
    e.preventDefault()
    dispatch(shortenTheLink(link))
  }

  useEffect(() => {
    if (shortLinkInfo) {
      setLink('')
    }
    if (userInfo && !linksInfo) {
      dispatch(getAllLinks())
    }
  }, [linksInfo, dispatch, userInfo, shortLinkInfo])

  const inputHandler = (e) => {
    setLink(e.target.value)
  }

  const deleteHandler = (link) => {
    dispatch(deleteTheLink(link._id))
  }

  const copyHandler = (link) => {
    var dummy = document.createElement('INPUT')
    dummy.setAttribute('type', 'text')
    dummy.setAttribute('id', 'dummyId')
    document.body.append(dummy)
    document.getElementById('dummyId').value = link.shortenedUrl
    dummy.select()
    document.execCommand('copy')
    dummy.remove()
    alert('Copied')
  }

  const renderLinks = () => {
    return loading ? (
      <section className='links-section'>Loading</section>
    ) : linksInfo ? (
      linksInfo.map((link) => (
        <section className='link-section-wrapper' key={link._id}>
          <div className='link-section'>
            <div className='link-url-section'>
              <p className='original-link'>{link.url}</p>
              <p className='shortened-link'>{link.shortenedUrl}</p>
            </div>
            <div className='buttons-section'>
              <button
                className='copy-btn btn'
                onClick={() => copyHandler(link)}
              >
                Copy
              </button>
              <button
                className='delete-btn btn'
                onClick={() => deleteHandler(link)}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      ))
    ) : (
      <></>
    )
  }

  return (
    <>
      <Header />
      <main className='body-wrapper'>
        <section className='body-details'>
          <h1 className='body-heading'>More than just shorter links</h1>
          <p className='body-desc'>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          {!userInfo && (
            <Link to='/login?redirect=/'>
              <button className='body-getstarted'>Get Started</button>
            </Link>
          )}
        </section>
        <section className='body-image'>
          <img src={desImage} alt='' />
        </section>
      </main>
      {userInfo && (
        <>
          <main className='url-input-section-wrapper'>
            <section className='url-section-input'>
              <form onSubmit={urlInputHandler}>
                <input
                  className='url-input'
                  placeholder='Shorten a link here...'
                  value={link}
                  onChange={inputHandler}
                />
                <button className='url-submit-btn' type='submit'>
                  Shorten It!
                </button>
              </form>
            </section>
          </main>
          <div className='links-section-wrapper'>
            {userInfo && <p>Hi {userInfo.name}</p>}
            {error && <Error>{error}</Error>}
            {shortenLinkError && <Error>{shortenLinkError}</Error>}
            {renderLinks()}
          </div>
        </>
      )}
      <Footer />
    </>
  )
}

export default Body
