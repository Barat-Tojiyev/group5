import React, { useState } from "react";

  const App2=()=>{
    const [state,setState]=useState(0)
    const [name,setName]=useState('Aisha')

    let onMinuss=()=>{
      setState(state-1)
    }
    
    let onName=(e)=>{
      setName(e.target.value)
    }
   return(
    <div>
        <h1>Function Component</h1>
        <h2>{state}</h2>
        <button onClick={onMinuss}>minuss</button>
        <h3>This is name: {name}</h3>
        <input onChange={onName} type="text" />
    </div>
   )
}
export default App2
