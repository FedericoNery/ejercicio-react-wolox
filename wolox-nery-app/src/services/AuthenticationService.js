import getAxiosInstance from "../configuration/httpClient"
import { AUTHENTICATION } from "../utils/endpoints"
import { Validator } from "../utils/validatorForm"
import { getCityById, getCountryById } from "./LocationService"
import store from '../configuration/store'
export const login = async (values) => {
    const axios = getAxiosInstance()
    const response = await axios.post(AUTHENTICATION.LOGIN, values)
    return response
}

export const signup = async (values) => {
    const axios = getAxiosInstance()
    const response = await axios.post(AUTHENTICATION.SIGNUP, values)
    return response
}

const esValidoElFormulario = (listaDeValidators) => {
    return listaDeValidators.filter(item => item.hasErrors).length === 0
}

export const validateFormSignUp = (values, setErrors) => {
    const { nombre, apellido, pais, ciudad, email, telefono, contrasenia, repetirContrasenia, terminosCondiciones } = values

    //TODO Validar provincia y ciudad

    const validarNombre = new Validator(nombre).isNotEmpty("Ingrese un nombre").isLength(1, 30, "No es válida la longitud del nombre")
    const validarApellido = new Validator(apellido).isNotEmpty("Ingrese un apellido").isLength(1, 30, "No es válida la longitud del apellido")
    const validarPais = new Validator(pais).isNotEmpty("Seleccione un país")
    const validarCiudad = new Validator(ciudad).isNotEmpty("Seleccione una ciudad")
    const validarEmail = new Validator(email).isNotEmpty("Ingrese un email").isEmail("Ingrese un email válido")
    const validarTelefono = new Validator(telefono).isNotEmpty("Ingrese un teléfono").isLength(1, 10, "No es válida la longitud del teléfono")
    const validarContrasenia = new Validator(contrasenia).isNotEmpty("Ingrese una contraseña").isMinLength(6).isAlphaNumeric("No es alfanumérica la contraseña")
    const validarRepetirContrasenia = new Validator(repetirContrasenia).isNotEmpty("Ingrese una contraseña").isEqualTo(contrasenia, "Debe ingresar la misma contraseña")
    const validarTerminosCondiciones = new Validator(terminosCondiciones).isNotEmpty("Debe aceptar los términos y condiciones")

    const listadoDeValidators = [
        validarNombre,
        validarApellido,
        validarPais,
        validarCiudad,
        validarEmail,
        validarTelefono,
        validarContrasenia,
        validarRepetirContrasenia,
        validarTerminosCondiciones
    ]

    setErrors({
        nombre: validarNombre.result,
        apellido: validarApellido.result,
        pais: validarPais.result,
        ciudad: validarCiudad.result,
        email: validarEmail.result,
        telefono: validarTelefono.result,
        contrasenia: validarContrasenia.result,
        repetirContrasenia: validarRepetirContrasenia.result,
        terminosCondiciones: validarTerminosCondiciones.result
    })

    return esValidoElFormulario(listadoDeValidators)
}

export const mapFormToSignUp = (values) => {
    //TODO no se si es lo mejor que vaya acá, o trabajar el formulario con los nombres directamente
    const pais = getCountryById(values.pais)
    const ciudad = getCityById(values.ciudad)

    return {
        "name": values.nombre,
        "last_name": values.apellido,
        "country": pais.name,
        "province": ciudad.name,
        "mail": values.email,
        "phone": values.telefono,
        "password": values.contrasenia
    }
}

export const isLogged = () => {
    const usuario = store.getState().authenticationReducer.usuarioRegistrado
    return usuario ? usuario.token === "qiowAS9ndnjLKSS32LaLAPlDKL2" : false
}