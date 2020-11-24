import getAxiosInstance from "../configuration/httpClient"
import { AUTHENTICATION } from "../utils/endpoints"
import { Validator } from "../utils/validatorForm"

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

export const validateFormSignUp = (values, setErrors) => {
   const { nombre, apellido, pais, ciudad, email, telefono, contrasenia, repetirContrasenia, terminosCondiciones } = values
   let esValido = true

   const validarNombre = new Validator(nombre)
   const validarApellido = new Validator(apellido)
   const validarPais = new Validator(pais)
   const validarCiudad = new Validator(ciudad)
   const validarEmail = new Validator(email)
   const validarTelefono = new Validator(telefono)
   const validarContrasenia = new Validator(contrasenia)
   const validarRepetirContrasenia = new Validator(repetirContrasenia)
   const validarTerminosCondiciones = new Validator(terminosCondiciones)

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

   return esValido
}

export const mapFormToSignUp = (values) => {
    return {
        "name": values.nombre,
        "last_name": values.apellido,
        "country": values.pais,
        "province": values.provincia,
        "mail": values.email,
        "phone": values.telefono,
        "password": values.contrasenia
    }
}
