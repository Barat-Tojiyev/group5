import React from 'react'
import Navbar from '../Navbar'

export const Main = (props) => {
  return (
    <div><Navbar color={props.color} name={props.name}/></div>
  )
}
export default Main
