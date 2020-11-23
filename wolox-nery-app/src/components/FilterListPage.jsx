import React, { useEffect } from 'react'
import Button from './WebComponents/Button'
import Input from './WebComponents/Input'
import Select from './WebComponents/Select'
import { connect } from "react-redux"
import { TYPES_TECHS } from '../services/TechsService'
import { updateFilter } from '../redux/actions/techsActions';
import { ORDER } from '../utils/enums'
import { bindActionCreators } from 'redux'

const FilterListPage = props => {
    const { updateFilter } = props
    const { filter } = props

    useEffect(() => {

    }, [])

    const onNombreChange = async (e) =>  {
        const nombreABuscar = e.target.value
        await updateFilter({ ...filter, nombre: nombreABuscar })
    }

    const onOrderNameChange = async () => {
        if(filter.ordenarPorNombre === null){
            await updateFilter({ ...filter, ordenarPorNombre: ORDER.ASCENDENTE })
        }
        else{
            await updateFilter({ ...filter, ordenarPorNombre: !filter.ordenarPorNombre })
        }
    }

    const onTypeChange = async (e) => {
        await updateFilter({ ...filter, tipos: Array.from(e.target.selectedOptions, (item) => item.value) })
    }

    return <>
        <Input id="inputFilterNombre" name="filterNombre" placeholder={"Nombre"} onChange={onNombreChange}></Input>
        <Button id="inputFilterOrderNombre" onClick={onOrderNameChange} type="button">
            {filter.ordenarPorNombre !== null ? filter.ordenarPorNombre === ORDER.ASCENDENTE ? "Ascendente" : "Descendente" : "ASC/DES"}
        </Button>
        <Select id="inputFilterTipo" name="filterTipo" multiple options={TYPES_TECHS} value={filter.tipos} onChange={onTypeChange} />
    </>
};

const mapStateToProps = state => {
    return {
        filter: state.techsReducer.filter,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateFilter: updateFilter,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterListPage);