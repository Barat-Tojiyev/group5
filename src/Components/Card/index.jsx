import React from 'react'
import { Button, Container,Description,Image } from './style'
import { useContext } from 'react'
import { productContext } from '../../context'

export const Card = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
   {
    state.data.map((value)=>{
      return(
        <div key={value.id}>
        <Image src={value.image}/>
        <Description >{value.name}</Description>
        <Description color='#46A358' ><b>${value.price}</b></Description>
        {
          state.data.quantity ?
           (<Button>Return</Button>)
           :
          (<Button onClick={()=>dispatch({type:'buy',payload:{id:value.id}})}>Buy</Button>)
        }
       
        </div>
      )
    })
   }
    </Container>
  )
}
