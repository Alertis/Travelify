import { REGISTER_FULFILLED, REGISTER_PENDING, REGISTER_REJECTED } from './action';

const initialState = {
    login: {},
    errMsg: "",
    loading: false,
    reject: false,
    valid: {}
}

export default (state = initialState, action) => { 
    switch( action.type ){
        case REGISTER_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                login: {}
            }
        case REGISTER_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                login: action.payload
            }
        case REGISTER_REJECTED:
            console.log(action)
            return{
                ...state,
                loading : false,
                reject: true,
                login: {},
                errMsg: action.payload,
                valid: action.payload.response.data
            }
        default:
            return state;
    
    }
}