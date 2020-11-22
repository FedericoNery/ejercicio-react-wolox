import getAxiosInstance from "../configuration/httpClient"
import { TECHS } from "../utils/endpoints"

export const getAllTechs = async () => {
    const axios = getAxiosInstance()
    const response = await axios.get(TECHS.ALL)
    return response
}