import React from 'react'
import { Container } from './style'
import { Navbar } from '../Navbar'
import { Card } from '../Card'

export const Main = () => {
  return (
    <Container>
      <Navbar/>
      <Card/>
    </Container>
  )
}
