import React, { useContext } from 'react'
import { Button, Container, Description, Icon, UL } from './style'
import { productContext } from '../../context'

export const Navbar = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
     
      <Description color='#46A358' > <Icon.Logo/> Greenshop</Description>
      <UL>
        <UL.LI>Home</UL.LI>
        <UL.LI>Shop</UL.LI>
      </UL>
      <Button onClick={()=>dispatch({type:'korzinka'})}>korzinka</Button>
    </Container>
  )
}
