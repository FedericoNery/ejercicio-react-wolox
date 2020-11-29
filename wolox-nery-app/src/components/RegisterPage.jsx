import React from 'react'
import Input from './WebComponents/Input'
import Checkbox from './WebComponents/Checkbox'
import Button from './WebComponents/Button'
import Select from './WebComponents/Select'
import { getCitiesByCountryId, getCountries } from '../services/LocationService'
import { setErrors, updateForm, signUp } from '../redux/actions/authenticationActions'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { mapFormToSignUp, signup, validateFormSignUp } from '../services/AuthenticationService'
import { withRouter } from 'react-router-dom'
import LocalStorageHelper from '../configuration/localStorage'
import FieldError from './WebComponents/FieldError'

const RegisterPage = props => {
  const { updateForm, setErrors, signUp } = props
  const { formulario, errores, history } = props

  const storage = new LocalStorageHelper()

  const onChangeInput = async (e) => {
    e.preventDefault()
    const fieldName = e.target.name
    const fieldValue = e.target.value
    updateForm({ ...formulario, [fieldName]: fieldValue })
  }

  const onChangePais = async (e) => {
    e.preventDefault()
    const fieldName = e.target.name
    const fieldValue = parseInt(e.target.value)
    updateForm({ ...formulario, [fieldName]: fieldValue })
  }

  const onChangeCiudad = async (e) => {
    e.preventDefault()
    const fieldName = e.target.name
    const fieldValue = parseInt(e.target.value)
    updateForm({ ...formulario, [fieldName]: fieldValue })
  }

  const onChecked = async (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.checked
    updateForm({ ...formulario, [fieldName]: fieldValue })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const esValidoElFormulario = validateFormSignUp(formulario, setErrors)
      if (esValidoElFormulario) {
        const valuesMapped = mapFormToSignUp(formulario)
        const response = await signup(valuesMapped)
        const datosAPersistir = { ...response.data, isLogged: true }
        signUp(datosAPersistir)

        storage.set("usuarioRegistrado", datosAPersistir)

        history.push('/')
      }
    }
    catch (error) {

    }
  }

  return (<div className="flex-container flex-flow-wrap flex-content-center">
    <div className="flex-item-fs">
      <h3 className="h3">Register Page</h3>
      <form onSubmit={onSubmit}>
        <FieldError errors={errores.nombre}>
          <Input id="inputNombre" name="nombre" maxlength="30" minlength="1" placeholder="Nombre" onChange={onChangeInput} autocomplete="off"></Input>
        </FieldError>
        <FieldError errors={errores.apellido}>
          <Input id="inputApellido" name="apellido" maxlength="30" placeholder="Apellido" minlength="1" onChange={onChangeInput} autocomplete="off"></Input>
        </FieldError>
        <FieldError errors={errores.pais}>
          <Select id="inputPais" name="pais" options={getCountries()} onChange={onChangePais} />
        </FieldError>
        <FieldError errors={errores.ciudad}>
          {formulario.pais && <Select id="inputCiudad" name="ciudad" options={getCitiesByCountryId(formulario.pais)} onChange={onChangeCiudad} />}
        </FieldError>
        <FieldError errors={errores.email}>
          <Input id="inputEmail" name="email" type="email" placeholder="Email" onChange={onChangeInput} autocomplete="off"></Input>
        </FieldError>
        <FieldError errors={errores.telefono}>
          <Input id="inputTelefono" name="telefono" placeholder="Teléfono" type="tel" onChange={onChangeInput}></Input>
        </FieldError>
        <FieldError errors={errores.contrasenia}>
          <Input id="inputContrasenia" name="contrasenia" placeholder="Contraseña" type="password" onChange={onChangeInput} minlength="6" autocomplete="off"></Input>
        </FieldError>
        <FieldError errors={errores.repetirContrasenia}>
          <Input id="inputRepetirContrasenia" name="repetirContrasenia" placeholder="Repetir contraseña" type="password" onChange={onChangeInput} minlength="6" autocomplete="off"></Input>
        </FieldError>
        <FieldError errors={errores.terminosCondiciones}>
          <Checkbox id="chkTerminosCondiciones" name="terminosCondiciones" labelName="Acepta términos y condiciones" onChange={onChecked} />
        </FieldError>
        <div className="flex-item-fs">
          <Button className="btn btn-outlined info" id="btnSubmit" type="submit">Enviar</Button>
        </div>
      </form>
    </div>

  </div>
  );
};

const mapStateToProps = state => {
  return {
    formulario: state.authenticationReducer.formulario,
    errores: state.authenticationReducer.errores,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateForm: updateForm,
    setErrors: setErrors,
    signUp: signUp
  }, dispatch)
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(RegisterPage);