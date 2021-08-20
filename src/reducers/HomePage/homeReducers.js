import { SET_USERS } from '../../actions/HomePage/types';

const initialState = {
    users: [],
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };

        default:
            return state;
    };
};

export default homePageReducer;
