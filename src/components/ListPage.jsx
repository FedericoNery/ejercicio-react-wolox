import React, { useEffect, lazy, Suspense } from 'react'
import { getAllTechs } from '../services/TechsService';
import FilterListPage from './FilterListPage';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { setListTechs, updateFilter } from '../redux/actions/techsActions';
import Loader from './WebComponents/Loader';

const ListPage = props => {
  const { list } = props
  const { setListTechs } = props
  const Listado = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./ListTechs')), 400);
    });
  }
  );

  useEffect(() => {
    async function fetchData() {
      const listTechs = await fetchListTechs()
      setListTechs(listTechs)
    }
    fetchData()
  }, [setListTechs])

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
    <div className="flex-container ">
      <div className="filter-list-item fl-1">
        <h3 className="h3">ListPage</h3>
      </div>
    </div>
    <FilterListPage />
    {list &&
      <Suspense fallback={<Loader />}>
        <Listado />
      </Suspense>
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