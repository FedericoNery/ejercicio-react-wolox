import React, { useEffect, lazy, Suspense } from 'react'
import { getAllTechs } from '../services/TechsService';
import FilterListPage from './FilterListPage';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { setListTechs, updateFilter } from '../redux/actions/techsActions';

const ListPage = props => {
  const { list } = props
  const { setListTechs } = props
  const Listado = lazy(() => import('./ListTechs'));

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
      {list ?
        <Suspense fallback={<p>Cargando...</p>}>
          <Listado />
        </Suspense>
        : <p>Cargando...</p>
      }
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