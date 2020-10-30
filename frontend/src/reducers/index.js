import { combineReducers } from 'redux'
import {
  deleteLinkReducer,
  getLinksReducer,
  shortenLinkReducer,
} from './linkReducers'
import { userLoginReducer, userRegisterReducer } from './userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  getLinks: getLinksReducer,
  shortenLink: shortenLinkReducer,
  deleteLink: deleteLinkReducer,
})

export default reducer
