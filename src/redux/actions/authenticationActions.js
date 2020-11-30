import { SET_ERRORS, SIGNUP, UPDATE_FORM, VALIDATE_FORM } from "../types/authenticationTypes";

export const signUp = (values) => {
    return {
        type: SIGNUP,
        values: values
    };
};

export const updateForm = (values) => {
    return {
        type: UPDATE_FORM,
        values: values
    };
};

export const setErrors = (values) => {
    return {
        type: SET_ERRORS,
        values: values
    };
};

export const validateFormSignUp = (values) => {
    return {
        type: VALIDATE_FORM,
        values: values
    };
};
