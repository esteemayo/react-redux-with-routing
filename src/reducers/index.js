import { combineReducers } from 'redux';

import homePageReducer from './HomePage/homeReducers';
import userPageReducer from './UserPage/userReducers';

export default combineReducers({
    homePage: homePageReducer,
    userPage: userPageReducer,
});
