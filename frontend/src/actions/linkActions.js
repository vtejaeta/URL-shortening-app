import {
  DELETE_LINK_FAIL,
  DELETE_LINK_REQUEST,
  DELETE_LINK_SUCCESS,
  GET_LINK_FAIL,
  GET_LINK_REQUEST,
  GET_LINK_SUCCESS,
  SHORTEN_LINK_FAIL,
  SHORTEN_LINK_REQUEST,
  SHORTEN_LINK_SUCCESS,
} from '../constants/linkconstants'
import axios from 'axios'

export const getAllLinks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LINK_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/link', config)

    dispatch({ type: GET_LINK_SUCCESS, payload: data })
    localStorage.setItem('linksInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: GET_LINK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const shortenTheLink = (url) => async (dispatch, getState) => {
  try {
    dispatch({ type: SHORTEN_LINK_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      '/api/link/shorten',
      {
        url: url,
      },
      config
    )

    dispatch({ type: SHORTEN_LINK_SUCCESS, payload: data })
    dispatch({ type: GET_LINK_REQUEST })
  } catch (error) {
    dispatch({
      type: SHORTEN_LINK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteTheLink = (linkId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_LINK_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: {
        linkId: linkId,
      },
    }

    const { data } = await axios.delete('/api/link', config)

    dispatch({ type: DELETE_LINK_SUCCESS, payload: data })
    dispatch({ type: GET_LINK_REQUEST })
  } catch (error) {
    dispatch({
      type: DELETE_LINK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
