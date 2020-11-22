import React from 'react'
import Input from './WebComponents/Input'
import Checkbox from './WebComponents/Checkbox'

const RegisterPage = props => {
  return (<>
    <>RegisterPage</>
    <Input id="inputNombre" name="nombre"></Input>
    <Input id="inputApellido" name="apellido"></Input>
    <Input id="inputEmail" name="email"></Input>
    <Input id="inputContrasenia" name="contrasenia"></Input>
    <Input id="inputRepetirContrasenia" name="repetirContrasenia"></Input>
     <Checkbox id="chkTerminosCondiciones" name="terminosCondiciones"
      value={false}
      labelName="Acepta términos y condiciones" /> 
  </>);
};

export default RegisterPage;

