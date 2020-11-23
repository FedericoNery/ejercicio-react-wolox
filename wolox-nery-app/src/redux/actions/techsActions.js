import { getTechAndApplyFilter } from "../../services/TechsService";
import { SET_LIST_TECHS_BY_FILTER, UPDATE_FILTER } from "../types/techsTypes";

export const updateFilter = (values) => async dispatch => {
    //TODO esto es mas un action creator que un action. Ver de reubicar
    await dispatch({
        type: UPDATE_FILTER,
        values: values
    })
    const lista = await getTechAndApplyFilter(values)
    await dispatch({
        type: SET_LIST_TECHS_BY_FILTER,
        values: lista
    })
};

export const setListTechs = (values) => async dispatch =>{
    await dispatch({
        type: SET_LIST_TECHS_BY_FILTER,
        values: values
    })
};
