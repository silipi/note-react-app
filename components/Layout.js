import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar.js'


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>
          NoteApp
          </title>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" />
      </Head>
      <Navbar />
      {props.children}
    </div>
  )
}
