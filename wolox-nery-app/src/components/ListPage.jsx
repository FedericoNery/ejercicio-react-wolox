import React, { useEffect, useState } from 'react'
import { getAllTechs } from '../services/TechsService';
import FilterListPage from './FilterListPage';
import Tech from './Tech';

const ListPage = props => {
  const [listTechs, setListTechs] = useState([])

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
    {listTechs.length > 0 && listTechs.map((item, index) => {
      return <Tech {...item} key={`${index}Tech`}/>
    })}
  </>
};

export default ListPage;