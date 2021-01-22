import { REGISTER_FULFILLED, REGISTER_PENDING, REGISTER_REJECTED, LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, USER_DELETE, RESTOREPASS_FULFILLED,
RESTOREPASS_PENDING, RESTOREPASS_REJECTED} from './action';

const initialState = {
    register: {},
    login: {},
    errMsg: "",
    loading: false,
    reject: false,
    valid: {}
}

export default (state = initialState, action) => { 
  var ls = require('react-native-local-storage');

    switch( action.type ){
        case REGISTER_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                register: {}
            }
        case REGISTER_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                register: action.payload
            }
        case REGISTER_REJECTED:
            console.log(action)
            return{
                ...state,
                loading : false,
                reject: true,
                register: {},
                errMsg: action.payload,
                valid: action.payload.response.data
            }
        case LOGIN_PENDING:
            console.log("loading")
            return{
                ...state,
                loading : true,
                reject: false,
                login: {}
            }
        case LOGIN_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                login: action.payload
            }
        case LOGIN_REJECTED:
            console.log(action)
            return{
                ...state,
                loading : false,
                reject: true,
                login: {},
                errMsg: action.payload,
                valid: action.payload.response.data
            }
        case RESTOREPASS_PENDING:
            return{
                ...state,
                loading : true,
                reject: false,
                restore: {}
            }
        case RESTOREPASS_FULFILLED:
            return{
                ...state,
                loading : false,
                reject: false,
                restore: action.payload
            }
        case RESTOREPASS_REJECTED:
            return{
                ...state,
                loading : false,
                reject: true,
                restore: {},
                errMsg: action.payload
            }
            case USER_DELETE:
                return{
                    ...state,
                    login: {}
                }
        default:
            return state;
    
    }
}