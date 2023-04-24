import React, { useContext } from 'react'
import { productContext } from '../../context'

export const Card = () => {
    const [state,setState]=useContext(productContext)
  return (
    <div>Card {state}
    <button onClick={()=>setState(state+1)}>pluss</button></div>
  )
}
