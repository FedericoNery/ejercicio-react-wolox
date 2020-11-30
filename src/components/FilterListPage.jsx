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

    const onNombreChange = async (e) => {
        const nombreABuscar = e.target.value
        await updateFilter({ ...filter, nombre: nombreABuscar })
    }

    const onOrderNameChange = async () => {
        if (filter.ordenarPorNombre === null) {
            await updateFilter({ ...filter, ordenarPorNombre: ORDER.ASCENDENTE })
        }
        else {
            await updateFilter({ ...filter, ordenarPorNombre: !filter.ordenarPorNombre })
        }
    }

    const onTypeChange = async (e) => {
        let tiposSeleccionados = Array.from(e.target.selectedOptions, (item) => item.value)

        if (tiposSeleccionados.length === 1 && tiposSeleccionados.includes(""))
            tiposSeleccionados = []

        await updateFilter({ ...filter, tipos: tiposSeleccionados })
    }

    return <div className="filter-list-container">
        <div className="filter-list-item">
            <Input id="inputFilterNombre" name="filterNombre" placeholder="Nombre" onChange={onNombreChange}></Input>
        </div>
        <div className="filter-list-item">
            <Button id="inputFilterOrderNombre" className="btn-asc-desc" onClick={onOrderNameChange} type="button">
                {filter.ordenarPorNombre !== null ? filter.ordenarPorNombre === ORDER.ASCENDENTE ? "Ascendente" : "Descendente" : "ASC/DES"}
            </Button>
        </div>
        <div className="filter-list-item">
            <Select id="inputFilterTipo" name="filterTipo" className="select-multiple" multiple options={TYPES_TECHS} value={filter.tipos} onChange={onTypeChange} 
            optionClassName=""/>
        </div>
    </div>
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