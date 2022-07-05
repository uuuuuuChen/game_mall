import React, { useState, useEffect, Fragment} from 'react'
// import { } from './style'
import Banners from './Banners'
import Activities from './Activities'
import ActivitiesInfo from './ActivitiesInfo'
import Gift from './Gift'
import GameInfo from './GameInfo'
// import SaleInfo from './SaleInfo'
import { Wrapper } from './style'

export default function Home() {
  // const gameName = search.get('name') || ''
  // console.log(gameName)
  return (
    <Wrapper>
      <Banners/>
      <ActivitiesInfo/>
      <Activities />
      <Gift/>
      <GameInfo/>
    </Wrapper>
  )
}

