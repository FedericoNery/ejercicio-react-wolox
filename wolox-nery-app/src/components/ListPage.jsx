import React, { useEffect } from 'react'
import { getAllTechs } from '../services/TechsService';
import FilterListPage from './FilterListPage';
import Tech from './Tech';
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import { setListTechs, updateFilter } from '../redux/actions/techsActions';
import Checkbox from './WebComponents/Checkbox';

const ListPage = props => {
  const { setListTechs } = props
  const { list } = props
  //const [listTechs, setListTechs] = useState([])

  useEffect(() => {
    async function fetchData() {
      const listTechs = await fetchListTechs()
      setListTechs(listTechs)
    }
    fetchData()
  }, [])

  const fetchListTechs = async () => {
    try {
      const response = await getAllTechs()
      return response.data
    }
    catch (error) {
      return []
    }
  }

  return <>
    ListPage
    <FilterListPage />
    {list.length > 0 && list.map((item, index) => {
      return <>
        <Checkbox id={`${index}chkFavTech`} name={`${index}NameFavTech`} key={`${index}FavTech`}></Checkbox>
        <Tech {...item} key={`${index}Tech`} />
      </>
    })}
  </>
};

const mapStateToProps = state => {
  return {
    list: state.techsReducer.techs,
    filter: state.techsReducer.filter,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateFilter: updateFilter,
    setListTechs: setListTechs,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);