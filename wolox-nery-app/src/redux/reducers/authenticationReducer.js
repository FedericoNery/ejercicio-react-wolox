import { SIGNUP, UPDATE_FORM, SET_ERRORS, SET_REGISTERED_USER, VALIDATE_FORM } from "../types/authenticationTypes";

const INITIAL_STATE = {
    formulario: {},
    errores: {},
    usuarioRegistrado: null
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state
            };

        case UPDATE_FORM:
            return {
                ...state, formulario: action.values
            };

        case VALIDATE_FORM:
            return {
                ...state, errores: action.values
            };

        case SET_ERRORS:
            return {
                ...state, errores: action.values
            };
        case SET_REGISTERED_USER:
            return {
                ...state, usuarioRegistrado: action.values
            };

        default: return state;
    }
};

export default authenticationReducer;