import React from 'react'
import { Hero } from '../Components/hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'

export const Shop = () => {
  return (
   <div>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>

   </div>
  )
}
