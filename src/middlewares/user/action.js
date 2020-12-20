import axios from 'axios';

export const REGISTER_PENDING = 'REGISTER_PENDING';
export const REGISTER_FULFILLED = 'REGISTER_FULFILLED';
export const REGISTER_REJECTED = 'REGISTER_REJECTED';

export function register(data) {
  return async (dispatch) => {
      console.log(data)
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