import LandingNav from '@/components/Nav/LandingNav'
import { LandingNav2 } from '@/components/Nav/LandingNav2'
import React from 'react'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
  return (
    <> 
    <LandingNav2/>
    <Outlet/>
    </>
  )
}

export default LandingLayout