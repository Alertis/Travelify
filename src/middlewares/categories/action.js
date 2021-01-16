import axios from 'axios';
import { rejectApp } from '../user/action'
export const CATEGORYLIST_PENDING = 'CATEGORYLIST_PENDING';
export const CATEGORYLIST_FULFILLED = 'CATEGORYLIST_FULFILLED';
export const CATEGORYLIST_REJECTED = 'CATEGORYLIST_REJECTED';


export function categoryList(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: CATEGORYLIST_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      const response = await axios.get(
        `https://travelify-backend.herokuapp.com/categories`,
        {headers:{Cookie: "jwt="+token}},
        data,
      );

      dispatch({
        type: CATEGORYLIST_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      rejectApp()
      dispatch({
        type: CATEGORYLIST_REJECTED,
        payload:  e,
      });
    }
  };
}
