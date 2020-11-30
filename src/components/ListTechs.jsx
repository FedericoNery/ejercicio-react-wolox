import React from 'react'
import Tech from './Tech';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { setListTechs, updateFavouritesTech, updateFilter } from '../redux/actions/techsActions';
import Checkbox from './WebComponents/Checkbox';
import { setLocalStorageItem } from '../configuration/localStorage';

const ListTechs = props => {
  const { updateFavouritesTech } = props
  const { list, favouriteTechs } = props

  const onFavourite = async (e) => {
    const value = e.target.value
    const checked = e.target.checked
    let listaFavoritos = [...favouriteTechs]

    if (checked) {
      listaFavoritos.push(value)
    }
    else {
      listaFavoritos = [...favouriteTechs].filter(item => item !== value)
    }

    await updateFavouritesTech(listaFavoritos)
    setLocalStorageItem("favouriteTechs", listaFavoritos)

  }

  return <>
    <div className="flex-container">
      <div className="flex-item-fs">
        <p>Tecnolog&iacute;a</p>
      </div>
      <div className="flex-item-fs">
        <p>A&ntilde;o</p>
      </div>
      <div className="flex-item-fs">
        <p>Autor</p>
      </div>
      <div className="flex-item-fs">
        <p>Licencia</p>
      </div>
      <div className="flex-item-fs">
        <p>Lenguaje</p>
      </div>
      <div className="flex-item-fs">
        <p>Tipo</p>
      </div>
      <div className="flex-item-fs">
        <p>Logo</p>
      </div>
      <div className="flex-item-fs">
        <p>Favorito</p>
      </div>
    </div>
    {list.map((item, index) => {
      return <div className="flex-container">
        <Tech {...item} key={`${index}Tech`} />
        <Checkbox id={`${index}chkFavTech`}
          className="check-list-tech"
          name={`${index}NameFavTech`} key={`${index}FavTech`} value={item.tech} checked={favouriteTechs.includes(item.tech)} onChange={onFavourite}></Checkbox>
      </div>
    })}
    <div className="margin-left margin-bottom">
      {list.length > 0 && <p className="small-font ">Encontradas <span class="badge">{list.length}</span></p>}
    </div>
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