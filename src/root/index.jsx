import React from 'react'
import Main from '../Components/Main'
import { Card } from '../Components/Card'
import { Context } from '../context'
import { App } from '../Components/App'

export const Root = (props) => {
  return (
    <div>
      <Context>
      <Main color={props.color} name={props.name}/>
      <Card/>
      <App/>
      </Context>
    </div>
  )
}
