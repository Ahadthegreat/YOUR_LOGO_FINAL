import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { NavLink ,Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div className='w-screen h-full'>

    <Header />
    <Outlet/>
    <Footer />
    
    </div>
  )
}

export default Layout