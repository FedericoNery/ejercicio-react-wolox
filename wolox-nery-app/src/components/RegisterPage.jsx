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
        const datosAPersistir = {...response.data, isLogged: true}
        signUp(datosAPersistir)
        
        storage.set("usuarioRegistrado", datosAPersistir)
        
        history.push('/')
      }
    }
    catch (error) {
      
    }
  }

  return (<>
    <>RegisterPage</>
    <form onSubmit={onSubmit}>
      Nombre: <Input id="inputNombre" name="nombre" maxlength="30" minlength="1" onChange={onChangeInput} required autocomplete="off"></Input><br></br>
      Apellido: <Input id="inputApellido" name="apellido" maxlength="30" minlength="1" onChange={onChangeInput} required autocomplete="off"></Input><br></br>
      Pa&iacute;s: <Select id="inputPais" name="pais" options={getCountries()} onChange={onChangePais} /><br></br>
      {formulario.pais && <Select id="inputCiudad" name="ciudad" options={getCitiesByCountryId(formulario.pais)} onChange={onChangeCiudad} />}
      Email: <Input id="inputEmail" name="email" type="email" onChange={onChangeInput} autocomplete="off" required></Input><br></br>
      Tel&eacute;fono: <Input id="inputTelefono" name="telefono" type="tel" onChange={onChangeInput} required></Input><br></br>
      Contrase&ntilde;a: <Input id="inputContrasenia" name="contrasenia" type="password" onChange={onChangeInput} required minlength="6" autocomplete="off"></Input><br></br>
      Repetir Contrase&ntilde;a: <Input id="inputRepetirContrasenia" name="repetirContrasenia" type="password" onChange={onChangeInput} required minlength="6" autocomplete="off"></Input><br></br>
      <Checkbox id="chkTerminosCondiciones" name="terminosCondiciones" labelName="Acepta términos y condiciones" onChange={onChecked} /><br></br>
      <Button id="btnSubmit" type="submit">Enviar</Button>
    </form>

  </>);
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