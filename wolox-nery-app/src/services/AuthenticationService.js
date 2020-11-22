import getAxiosInstance from "../configuration/httpClient"
import { AUTHENTICATION } from "../utils/endpoints"

export const login = async () => {
    const axios = getAxiosInstance()
    const response = await axios.post(AUTHENTICATION.LOGIN)
    return response
}

export const signup = async () => {
    const axios = getAxiosInstance()
    const response = await axios.get(AUTHENTICATION.SIGNUP)
    return response
}