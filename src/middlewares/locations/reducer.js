import { LOCATIONLIST_FULFILLED, LOCATIONLIST_PENDING, LOCATIONLIST_REJECTED } from './action';

const initialState = {
    locations: [],
    errMsg: "",
    loading: false,
    reject: false
}

export default (state = initialState, action) => { 
    switch( action.type ){
        case LOCATIONLIST_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                locations: []
            }
        case LOCATIONLIST_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                locations: action.payload
            }
        case LOCATIONLIST_REJECTED:
            return{
                ...state,
                loading : false,
                reject: true,
                locations: [],
                errMsg: action.payload,
            }
        default:
            return state;
    
    }
}