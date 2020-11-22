import { SIGNUP } from "../types/authenticationTypes";

export const login = (values) => {
    return {
        type: SIGNUP,
        values: values
    };
};
