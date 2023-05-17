import React from 'react'
import { Button, Container,Description,Image, Sale } from './style'
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
          { value.sale ? (<Sale>{value.sale}% OFF</Sale>): ''}
          
        <Image src={value.image}/>
        <Description >{value.name}</Description>
        <Description color='#46A358' ><b>
          ${value.sale ? (value.price-((value.price/100)*value.sale)) : value.price}
          {value.sale ? (<del> ${value.price}</del>): ''}</b></Description>
        
         {
          value.addtoCard ? 
          (<Button onClick={()=>dispatch({type:'delet',payload:{id:value.id}})}>Cansel</Button>)
          :(<Button onClick={()=>dispatch({type:'buy',payload:{id:value.id}})}>Buy</Button>)
         }
          
        
       
        </div>
      )
    })
   }
    </Container>
  )
}
