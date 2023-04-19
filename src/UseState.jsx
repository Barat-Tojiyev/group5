import React, { useState } from 'react'

export const UseState = () => {
    const [state,setState]=useState(0)

    let onPluss=()=>{
        setState(state+1)
    }
  return (
    <div>
        <h1>UseState</h1>
        <h4>{state}</h4>
        <button onClick={onPluss}>pluss</button>
    </div>
  )
}
