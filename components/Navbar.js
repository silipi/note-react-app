import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a className="navbar-brand mx-5 float-left" href="#" >NoteApp</a>

      <ul className="navbar-nav mr-auto collapse navbar-collapse float-right">
        <li className="nav-item active">
          <Link href="/"><a className="nav-link">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-link">Sobre</a></Link>
        </li>
      </ul>
      <button className="btn btn-success shadow-sm">Contato</button>
    </nav>
  )
}
