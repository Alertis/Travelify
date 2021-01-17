import axios from 'axios';
import { rejectApp } from "../user/action";

export const LOCATIONLIST_PENDING = 'LOCATIONLIST_PENDING';
export const LOCATIONLIST_FULFILLED = 'LOCATIONLIST_FULFILLED';
export const LOCATIONLIST_REJECTED = 'LOCATIONLIST_REJECTED';

export const LOCATIONDETAIL_PENDING = 'LOCATIONDETAIL_PENDING';
export const LOCATIONDETAIL_FULFILLED = 'LOCATIONDETAIL_FULFILLED';
export const LOCATIONDETAIL_REJECTED = 'LOCATIONDETAIL_REJECTED';

export const LOCATIONPICS_PENDING = 'LOCATIONPICS_PENDING';
export const LOCATIONPICS_FULFILLED = 'LOCATIONPICS_FULFILLED';
export const LOCATIONPICS_REJECTED = 'LOCATIONPICS_REJECTED';

export const ADDCOMMENT_PENDING = 'ADDCOMMENT_PENDING';
export const ADDCOMMENT_FULFILLED = 'ADDCOMMENT_FULFILLED';
export const ADDCOMMENT_REJECTED = 'ADDCOMMENT_REJECTED';

export const ADDLOCATION_PENDING = 'ADDLOCATION_PENDING';
export const ADDLOCATION_FULFILLED = 'ADDLOCATION_FULFILLED';
export const ADDLOCATION_REJECTED = 'ADDLOCATION_REJECTED';

export const EDITLOCATION_PENDING = 'EDITLOCATION_PENDING';
export const EDITLOCATION_FULFILLED = 'EDITLOCATION_FULFILLED';
export const EDITLOCATION_REJECTED = 'EDITLOCATION_REJECTED';

export const DELETELOCATION_PENDING = 'DELETELOCATION_PENDING';
export const DELETELOCATION_FULFILLED = 'DELETELOCATION_FULFILLED';
export const DELETELOCATION_REJECTED = 'DELETELOCATION_REJECTED';

export const ADDPHOTO_PENDING = 'ADDPHOTO_PENDING';
export const ADDPHOTO_FULFILLED = 'ADDPHOTO_FULFILLED';
export const ADDPHOTO_REJECTED = 'ADDPHOTO_REJECTED';

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
      rejectApp()
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
      rejectApp()
      dispatch({
        type: LOCATIONDETAIL_REJECTED,
        payload:  e,
      });
    }
  };
}

export function locationPics(lId) {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOCATIONPICS_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      let response = await axios.get(
        `https://travelify-backend.herokuapp.com/locations/${lId}/photos`,{headers:{Cookie: "jwt="+token}}
      );;
           
        console.log(response.data)
      dispatch({
        type: LOCATIONPICS_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      rejectApp()
      dispatch({
        type: LOCATIONPICS_REJECTED,
        payload:  e,
      });
    }
  };
}

export function addComment(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADDCOMMENT_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      let username = ls.get('username').then((data) => data);

      console.log(token, data)
      let response = await axios.post(
        `https://travelify-backend.herokuapp.com/locations/${data.lId}/comments`, data, {headers:{Cookie: "jwt="+token}}
      );
      console.log("add comment", response)
      dispatch({
        type: ADDCOMMENT_FULFILLED,
        payload: response.data,
      });
    } catch (e) {
      console.log(e)
      rejectApp()
      dispatch({
        type: ADDCOMMENT_REJECTED,
        payload:  e,
      });
    }
  };
}

export function addLocation(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADDLOCATION_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      let response = await axios.post(
        `https://travelify-backend.herokuapp.com/locations/`, data, {headers:{Cookie: "jwt="+token}}
      );
      dispatch({
        type: ADDLOCATION_FULFILLED,
        payload: response.data,
      });
      console.log(response.data)
      let response2 = await axios.post(
        `https://travelify-backend.herokuapp.com/locations/${response.data._id}/categories/${data.category}`, {headers:{Cookie: "jwt="+token}}
      );
      console.log(response2.data)
    } catch (e) {
      console.log(e)
      rejectApp()
      dispatch({
        type: ADDLOCATION_REJECTED,
        payload:  e,
      });
    }
  };
}

export function editLocation(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: EDITLOCATION_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      console.log(data)
      let response = await axios.put(
        `https://travelify-backend.herokuapp.com/locations/${data.id}`, data, {headers:{Cookie: "jwt="+token}}
      );
      dispatch({
        type: EDITLOCATION_FULFILLED,
        payload: response.data,
      });
      console.log(response.data)
      
    } catch (e) {
      console.log(e)
      rejectApp()
      dispatch({
        type: EDITLOCATION_REJECTED,
        payload:  e,
      });
    }
  };
}

export function deleteLocation(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETELOCATION_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      console.log(data)
      let response = await axios.delete(
        `https://travelify-backend.herokuapp.com/locations/${data.id}`, {headers:{Cookie: "jwt="+token}}
      );
      dispatch({
        type: DELETELOCATION_FULFILLED,
        payload: response.data,
      });
      console.log(response.data)
      
    } catch (e) {
      console.log(e)
      rejectApp()
      dispatch({
        type: DELETELOCATION_REJECTED,
        payload:  e,
      });
    }
  };
}

export function addPhoto(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADDPHOTO_PENDING,
      });
      var ls = require('react-native-local-storage');
      let token = ls.get('token').then((data) => data);
      console.log("photo data", data._parts[1][1])

      let response = await axios.post(
        `https://travelify-backend.herokuapp.com/locations/${data._parts[1][1]}/photos`, data, {headers:{Cookie: "jwt="+token,'Content-Type': 'multipart/form-data; '}}
      );
      dispatch({
        type: ADDPHOTO_FULFILLED,
        payload: response.data,
      });
    
    } catch (e) {
      console.log(e)
      rejectApp()
      dispatch({
        type: ADDPHOTO_REJECTED,
        payload:  e,
      });
    }
  };
}