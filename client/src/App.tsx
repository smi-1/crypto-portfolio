import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Content } from './components/Content'
import { SideBar } from './components/SideBar'
//import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Content />
        <SideBar />
      </main>
    </>
  )
}

export default App
