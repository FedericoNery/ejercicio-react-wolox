import { getTechAndApplyFilter } from "../../services/TechsService";
import { SET_LIST_TECHS_BY_FILTER, UPDATE_FILTER, UPDATE_FAVOURITES_TECH } from "../types/techsTypes";

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

export const updateFavouritesTech = (values) => async dispatch =>{
    await dispatch({
        type: UPDATE_FAVOURITES_TECH,
        values: values
    })
};
