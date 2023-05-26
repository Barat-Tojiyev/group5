import React from 'react'
import { Main } from '../Main'
import { Context } from '../context'

export const Root = () => {
  return (
    <Context>
        <Main/>
    </Context>
  )
}
