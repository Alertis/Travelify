import axios from 'axios';

export const LOCATIONLIST_PENDING = 'LOCATIONLIST_PENDING';
export const LOCATIONLIST_FULFILLED = 'LOCATIONLIST_FULFILLED';
export const LOCATIONLIST_REJECTED = 'LOCATIONLIST_REJECTED';

export const LOCATIONDETAIL_PENDING = 'LOCATIONDETAIL_PENDING';
export const LOCATIONDETAIL_FULFILLED = 'LOCATIONDETAIL_FULFILLED';
export const LOCATIONDETAIL_REJECTED = 'LOCATIONDETAIL_REJECTED';

export function locationList(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOCATIONLIST_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      let response;
      if(data.search){
        response = await axios.get(
          `https://travelify-backend.herokuapp.com/locations/search/?name=`+search,{headers:{Cookie: "jwt="+token}}
        );
      } else if (data.category){
        response = await axios.get(
          `https://travelify-backend.herokuapp.com/categories/`+data.category+`/locations`,{headers:{Cookie: "jwt="+token}});
      }else{
        response = await axios.get(
          `https://travelify-backend.herokuapp.com/locations`,
          {headers:{Cookie: "jwt="+token}}
        );
      }
        

      dispatch({
        type: LOCATIONLIST_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      console.log(e)
      dispatch({
        type: LOCATIONLIST_REJECTED,
        payload:  e,
      });
    }
  };
}


export function locationDetail(lId) {
  console.log(lId)
  return async (dispatch) => {
    try {
      dispatch({
        type: LOCATIONDETAIL_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      let response = await axios.get(
        `https://travelify-backend.herokuapp.com/locations/`+lId,{headers:{Cookie: "jwt="+token}}
      );;
           
        console.log(response.data)
      dispatch({
        type: LOCATIONDETAIL_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      console.log(e)
      dispatch({
        type: LOCATIONDETAIL_REJECTED,
        payload:  e,
      });
    }
  };
}
