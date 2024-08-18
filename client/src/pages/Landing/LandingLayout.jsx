import LandingNav from '@/components/Nav/LandingNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
  return (
    <>
    <LandingNav/>
    <Outlet/>
    </>
  )
}

export default LandingLayout