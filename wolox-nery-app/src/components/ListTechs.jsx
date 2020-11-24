import React, { useEffect, lazy, Suspense } from 'react'
import { getAllTechs } from '../services/TechsService';
import Tech from './Tech';
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import { setListTechs, updateFavouritesTech, updateFilter } from '../redux/actions/techsActions';
import Checkbox from './WebComponents/Checkbox';

const ListTechs = props => {
  const { setListTechs, updateFavouritesTech } = props
  const { list, favouriteTechs } = props

  const onFavourite = async (e) => {
    debugger
    const value = e.target.value
    const checked = e.target.checked
    let listaFavoritos = [...favouriteTechs]

    if(checked){
      listaFavoritos.push(value)
    }
    else{
      listaFavoritos = [...favouriteTechs].filter(item => item !== value)
    }
    debugger
    await updateFavouritesTech(listaFavoritos)
  }

  return <>
    {list.length > 0 && list.map((item, index) => {
      return <>
        <Checkbox id={`${index}chkFavTech`} name={`${index}NameFavTech`} key={`${index}FavTech`} value={item.tech} checked={favouriteTechs.includes(item.tech)} onChange={onFavourite}></Checkbox>
        <Tech {...item} key={`${index}Tech`} />
      </>
    })}
  </>
};

const mapStateToProps = state => {
  return {
    list: state.techsReducer.techs,
    favouriteTechs: state.techsReducer.favouriteTechs,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateFilter: updateFilter,
    setListTechs: setListTechs,
    updateFavouritesTech: updateFavouritesTech
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTechs);