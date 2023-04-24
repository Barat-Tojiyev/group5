import React, { useContext } from 'react'
import { productContext } from '../../context'

export const App = () => {
    const [state,setState]=useContext(productContext)
  return (
    <div>App
        {state}

    </div>
  )
}
