import React, { useContext } from 'react'
import { Container } from './style'
import { Navbar } from '../Navbar'
import { Card } from '../Card'
import { Basket } from '../Basket'
import { productContext } from '../../context'

export const Home = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
      <Navbar/>
      {state.korzinka ? <Basket/> : <Card/> }
      
      
    </Container>
  )
}
