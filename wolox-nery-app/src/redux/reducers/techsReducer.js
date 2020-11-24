import { SET_LIST_TECHS_BY_FILTER, UPDATE_FILTER, UPDATE_FAVOURITES_TECH } from "../types/techsTypes";

const INITIAL_STATE = {
    filter: {
        nombre: "",
        tipos: [],
        ordenarPorNombre: null,
    },
    techs: null,
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

        case UPDATE_FAVOURITES_TECH:
            return {
                ...state, favouriteTechs: action.values
            };

        default: return state;
    }
};

export default techsReducer;