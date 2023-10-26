import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'


// importing custom jsx files

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout