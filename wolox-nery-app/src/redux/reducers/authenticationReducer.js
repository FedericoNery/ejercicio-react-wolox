import { SIGNUP } from "../types/authenticationTypes";

const INITIAL_STATE = {
    
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state
            };

        default: return state;
    }
};

export default authenticationReducer;