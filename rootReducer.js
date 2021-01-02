
import { combineReducers } from 'redux';
import User from './src/middlewares/user/reducer'
import Categories from './src/middlewares/categories/reducer'

export default combineReducers({
    User, Categories
});