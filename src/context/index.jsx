import { createContext, useEffect,  useState } from "react";

export const userContext=createContext()

export const Context=({children})=>{
    const [state,setState]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products',{
method:'GET'
        })
        .then((res)=>res.json())
        .then((res)=>{
            setState(res)          
        })
    },[])
    return(
        <userContext.Provider value={[state, setState]}>
{children}
        </userContext.Provider>
    )
}