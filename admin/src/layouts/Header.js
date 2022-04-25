import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import Helmet from 'react-helmet'

const Header = () => {
  return (
    <>
        <header className="app-header fixed-top">
            <Navbar />
            <Sidebar />
        </header>
    </>
  )
}

export default Header