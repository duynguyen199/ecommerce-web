import React from 'react'
import HomePageHeader from '../../Component/HomePageHeader/HomePageHeader'
import HeroSession from '../../Component/HeroSession/HeroSession'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div><HomePageHeader/>
    <HeroSession/></div>
  )
}

export default Homepage