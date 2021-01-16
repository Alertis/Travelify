import { LOCATIONLIST_FULFILLED, LOCATIONLIST_PENDING, LOCATIONLIST_REJECTED, LOCATIONDETAIL_FULFILLED, LOCATIONDETAIL_REJECTED, LOCATIONDETAIL_PENDING,
LOCATIONPICS_FULFILLED, LOCATIONPICS_PENDING, LOCATIONPICS_REJECTED,ADDCOMMENT_FULFILLED,ADDCOMMENT_PENDING, ADDCOMMENT_REJECTED } from './action';

const initialState = {
    detail:{},
    locations: [],
    photos: [],
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
        case LOCATIONPICS_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                photos: []
            }
        case LOCATIONPICS_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                photos: action.payload
            }
        case LOCATIONPICS_REJECTED:
            return{
                ...state,
                loading : false,
                reject: true,
                photos: [],
                errMsg: action.payload,
            }
            case ADDCOMMENT_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
            }
        case ADDCOMMENT_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
            }
        case ADDCOMMENT_REJECTED:
            return{
                ...state,
                loading : false,
                reject: true,
                errMsg: action.payload,
            }
        default:
            return state;
    
    }
}