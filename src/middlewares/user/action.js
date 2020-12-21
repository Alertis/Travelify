import axios from 'axios';

export const REGISTER_PENDING = 'REGISTER_PENDING';
export const REGISTER_FULFILLED = 'REGISTER_FULFILLED';
export const REGISTER_REJECTED = 'REGISTER_REJECTED';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

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
      dispatch({
        type: REGISTER_REJECTED,
        payload:  e,
      });
    }
  };
}

export function login(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_PENDING,
      });
      const response = await axios.post(
        `https://travelify-backend.herokuapp.com/login`,
        data,
      );

      dispatch({
        type: LOGIN_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: LOGIN_REJECTED,
        payload:  e,
      });
    }
  };
}