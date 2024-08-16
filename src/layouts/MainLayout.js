import React, { useContext } from 'react'
import './MainLayout.css'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import ThemeSelector from '../components/ThemeSelector'
import { ThemeContext } from '../context/ThemeContext'

function MainLayout() {
  const { mode } = useContext(ThemeContext)

  return (
    <div className={`main bg-${mode}`}>
      <Navbar />
      <ThemeSelector />
      <div className="container">
         <Outlet />
      </div>
    </div>
  )
}

export default MainLayout