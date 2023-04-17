import React, { useEffect, useState } from 'react'

export const App = (props) => {
    // useState
    const [state,setState]=useState(props.count);
    const [name,setName]=useState('Damir')
let onPluss =()=>{
    setState(state+1)   
}
let onName=(e)=>{
   setName(e.target.value)
}

useEffect(()=>{
   setState(props.count)
},[props.count])
  return (
    <div>
        <h1>Function Component</h1>
        <h2>{state}</h2>
        <button onClick={onPluss}>pluss</button>
        <h3>Name:  {name}</h3>
        <input type="text" onChange={onName} />
    </div>
  )
}
export default App
