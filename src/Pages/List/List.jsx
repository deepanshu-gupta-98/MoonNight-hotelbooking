import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../components/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/searchitem/SearchItem'

function List() {

  const location = useLocation();
  const [destination, setDestination] = useState("location,state,destination")


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listItem">
          <div className="listSearch">

          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>

  )
}

export default List