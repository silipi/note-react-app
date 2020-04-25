import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar.js'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" />
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  )
}

export default Layout;