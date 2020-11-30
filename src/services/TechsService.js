import getAxiosInstance from "../configuration/httpClient"
import { TECHS } from "../utils/endpoints"
import { ORDER } from "../utils/enums"

export const getAllTechs = async () => {
    const axios = getAxiosInstance()
    const response = await axios.get(TECHS.ALL)
    return response
}

/*TODO levantar del listado de techs, recorrer tech una por una e ir agregando las que no estan.
Ahora hardcodeadas
Sino endpoint en API, pero ahora no hay
*/
export const TYPES_TECHS = [
    {
        name: "--Seleccionar--",
        value: ""
    },
    {
        name: "Back-End",
        value: "Back-End"
    },
    {
        name: "Front-End",
        value: "Front-End"
    },
    {
        name: "Mobile",
        value: "Mobile"
    }]

export const applyFilter = (listTechs, filter) => {
    const { nombre, tipos, ordenarPorNombre } = filter
    let listaConFiltroAplicado = listTechs

    if (nombre && nombre.length > 0)
        listaConFiltroAplicado = [...listaConFiltroAplicado].filter(item => item.tech.toLowerCase().includes(nombre.toLowerCase()))

    if (tipos && tipos.length > 0)
        listaConFiltroAplicado = [...listaConFiltroAplicado].filter(item => tipos.includes(item.type))

    if (ordenarPorNombre === ORDER.ASCENDENTE)
        listaConFiltroAplicado = [...listaConFiltroAplicado].sort((a, b) => a.tech.toLowerCase().localeCompare(b.tech.toLowerCase()))
    else if (ordenarPorNombre === ORDER.DESCENDENTE)
        listaConFiltroAplicado = [...listaConFiltroAplicado].sort((a, b) => a.tech.toLowerCase().localeCompare(b.tech.toLowerCase())).reverse()

    return listaConFiltroAplicado
}

export const getTechAndApplyFilter = async (filter) => {
    const response = await getAllTechs()
    const lista = response.data
    return applyFilter(lista, filter)
}
