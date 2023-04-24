import React, { useContext } from 'react'
import { Button } from './style'
import { productContext } from '../../context'

export const Navbar = (props) => {
  const [state,setState]=useContext(productContext)
  return (
    <div>Salom {props.name} {state}
    <Button color={props.color}>send</Button></div>
  )
}
export default Navbar