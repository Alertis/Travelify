import { CATEGORYLIST_FULFILLED, CATEGORYLIST_PENDING, CATEGORYLIST_REJECTED } from './action';

const initialState = {
    categories: [],
    errMsg: "",
    loading: false,
    reject: false
}

export default (state = initialState, action) => { 
    switch( action.type ){
        case CATEGORYLIST_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                categories: []
            }
        case CATEGORYLIST_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                categories: action.payload
            }
        case CATEGORYLIST_REJECTED:
            return{
                ...state,
                loading : false,
                reject: true,
                categories: [],
                errMsg: action.payload,
            }
        default:
            return state;
    
    }
}