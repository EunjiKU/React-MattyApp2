import { combineReducers } from "redux";
import * as types from './actions';
import { getCookie } from '../utils/cookies';

const initialState = {
  userId: getCookie("UserID") || '',
  accessToken: getCookie("AccessToken") || '',
  refreshToken: getCookie("RefreshToken") || '',
  userImgUrl: process.env.REACT_APP_USER_IMG_URL,
}

const user = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case types.SET_USERID:
      // console.log("1");
      return {
        ...state,
        userId: action.payload,
      }
    case types.SET_ACCESSTOKEN:
      // console.log("2");
      return {
        ...state,
        accessToken: action.payload,
      }
    case types.SET_RERESHTOKEN:
      // console.log("3");
      return {
        ...state,
        refreshToken: action.payload,
      }
      default:
        return state;
  }
}

const rootReducer = combineReducers({
  user,
})

export default rootReducer;