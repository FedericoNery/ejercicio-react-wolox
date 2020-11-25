import { SIGNUP, UPDATE_FORM, SET_ERRORS, SET_REGISTERED_USER, VALIDATE_FORM } from "../types/authenticationTypes";

const INITIAL_STATE = {
    formulario: {},
    errores: {},
    usuarioRegistrado: null,
    isLogged: false
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP:
            //TODO corregir action para evitar acceder a las props
            return {
                ...state, usuarioRegistrado: action.values.token, isLogged: action.values.isLogged
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