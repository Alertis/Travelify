import axios from 'axios';

export const REGISTER_PENDING = 'REGISTER_PENDING';
export const REGISTER_FULFILLED = 'REGISTER_FULFILLED';
export const REGISTER_REJECTED = 'REGISTER_REJECTED';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export const RESTOREPASS_PENDING = 'RESTOREPASS_PENDING';
export const RESTOREPASS_FULFILLED = 'RESTOREPASS_FULFILLED';
export const RESTOREPASS_REJECTED = 'RESTOREPASS_REJECTED';

export function rejectApp(){
  console.log("reject")
  return async (dispatch) => {
    dispatch({
      type: USER_DELETE,
    });
  }
 
}
export function register(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_PENDING,
      });
      const response = await axios.post(
        `https://travelify-backend.herokuapp.com/signup`,
        data,
      );

      dispatch({
        type: REGISTER_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
     rejectApp()
      dispatch({
        type: REGISTER_REJECTED,
        payload:  e,
      });
    }
  };
}

export function login(data) {
  return async (dispatch) => {
    console.log("start")
    try {
    console.log("pending")
      dispatch({
        type: LOGIN_PENDING,
      });
      const response = await axios.post(
        `https://travelify-backend.herokuapp.com/login`,
        data,
      );
    console.log(response.data)

      dispatch({
        type: LOGIN_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      rejectApp()
      dispatch({
        type: LOGIN_REJECTED,
        payload:  e,
      });
    }
  };
}

export function restorePass(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: RESTOREPASS_PENDING,
      });
      const response = await axios.post(
        `https://travelify-backend.herokuapp.com//forgot-password`,
        data,
      );
      dispatch({
        type: RESTOREPASS_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      rejectApp()
      dispatch({
        type: RESTOREPASS_REJECTED,
        payload:  e,
      });
    }
  };
}