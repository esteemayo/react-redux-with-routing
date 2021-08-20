import { combineReducers } from 'redux';

import homePageReducer from './HomePage/homeReducers';
import userPageReducer from './UserPage/userReducer';

export default combineReducers({
    homePage: homePageReducer,
    userPage: userPageReducer,
});
