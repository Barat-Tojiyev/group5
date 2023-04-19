import React, { useReducer } from 'react'
import { data } from './data'

export const UseReducer = () => {
    const [state,dispatch]=useReducer((state,action)=>{
       switch(action.type){
        case 'pluss' : return {count:state.count+1}
        case 'minus' : return {count:state.count-1}
        case 'del'  :
          let res =state.mock.filter((value)=>value.id !==action.payload.id)
          return {...state,mock:res}
        case 'name' :
            return {...state,name:action.payload.name}
       
        default : return state;
       }
    },{
        count:0,
        mock:data,
        name:'Aslbek Husanov'
    })
  return (
    <div>
        <h1>UseReducer</h1>
        <h4>{state.count}</h4>
        <button onClick={()=>dispatch({type:'pluss'})}>pluss</button>
        <button onClick={()=>dispatch({type:'minus'})}>minuss</button>

        <h2>Name:{state.name}</h2>
        <input onChange={(e)=>dispatch({type:'name',
        payload:{name:e.target.value}})} type="text" />
        {
            state.mock.map((value)=>{
                return <h3 key={value.id}>{value.name} 
                <button onClick={()=>dispatch({type:'del',payload:{id:value.id}})}>
                    del</button></h3>
            })
        }
        </div>
  )
}
