import {
  DELETE_LINK_FAIL,
  DELETE_LINK_REQUEST,
  DELETE_LINK_SUCCESS,
  GET_LINK_FAIL,
  GET_LINK_REQUEST,
  GET_LINK_RESET,
  GET_LINK_SUCCESS,
  SHORTEN_LINK_FAIL,
  SHORTEN_LINK_REQUEST,
  SHORTEN_LINK_SUCCESS,
} from '../constants/linkconstants'

export const getLinksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LINK_REQUEST:
      return { loading: true }
    case GET_LINK_SUCCESS:
      return { loading: false, linksInfo: action.payload }
    case GET_LINK_FAIL:
      return { loading: false, error: action.payload }
    case GET_LINK_RESET:
      return { loading: false }
    default:
      return state
  }
}

export const shortenLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case SHORTEN_LINK_REQUEST:
      return { loading: true }
    case SHORTEN_LINK_SUCCESS:
      return { loading: false, shortLinkInfo: action.payload }
    case SHORTEN_LINK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LINK_REQUEST:
      return { loading: true }
    case DELETE_LINK_SUCCESS:
      return { loading: false, newLinkInfo: action.payload }
    case DELETE_LINK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
