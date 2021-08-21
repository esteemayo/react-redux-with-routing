import { SET_USER } from '../../actions/UserPage/types';

const initialState = {
    user: {},
};

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };


        default:
            return state;
    };
};

export default userPageReducer;
