import React from 'react'
import Navbar from './components/Navbar'
import { Outlet} from 'react-router'
import ItemList from './components/ItemList'
import { Link } from 'react-router-dom'
import NavFilter from './components/NavFilter'
import { useContext } from 'react'
import EcomContext from './contextState/ecomContext'
import DetailsPage from './components/DetailsPage'
const App = () => {
const {x}=useContext(EcomContext)
console.log(x)
  return (
    <div>
  <Navbar/>      <Outlet />
    </div>
  )
}

export default App