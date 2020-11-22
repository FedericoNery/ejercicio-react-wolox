import React from 'react'
import Button from './WebComponents/Button'
import Input from './WebComponents/Input'
import Select from './WebComponents/Select'

const FilterListPage = props => {
    return <>
    <Input id="inputFilterNombre" name="filterNombre"></Input>
    <Button>
        Asc/Des
    </Button>
    <Select />
    </>
};

export default FilterListPage;