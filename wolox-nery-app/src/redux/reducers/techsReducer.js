import { SET_LIST_TECHS_BY_FILTER, UPDATE_FILTER } from "../types/techsTypes";

const INITIAL_STATE = {
    filter: {
        nombre: "",
        tipos: [],
        ordenarPorNombre : null,
    },
    techs: [],
    favouriteTechs: []
};

const techsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return {
                ...state, filter: action.values
            };
        case SET_LIST_TECHS_BY_FILTER:
            return {
                ...state, techs: action.values
            };

        default: return state;
    }
};

export default techsReducer;