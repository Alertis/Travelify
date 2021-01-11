import { LOCATIONLIST_FULFILLED, LOCATIONLIST_PENDING, LOCATIONLIST_REJECTED, LOCATIONDETAIL_FULFILLED, LOCATIONDETAIL_REJECTED, LOCATIONDETAIL_PENDING } from './action';

const initialState = {
    detail:{},
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
        case LOCATIONDETAIL_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                detail: {}
            }
        case LOCATIONDETAIL_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                detail: action.payload
            }
        case LOCATIONDETAIL_REJECTED:
            return{
                ...state,
                loading : false,
                reject: true,
                detail: {},
                errMsg: action.payload,
            }
        default:
            return state;
    
    }
}