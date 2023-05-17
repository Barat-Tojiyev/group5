import React from 'react'
import { Container, Delet, Image, Minus, Plus, Table } from './style'
import { useContext } from 'react'
import { productContext } from '../../context'



export const Basket = () => {
  const [state, dispatch] = useContext(productContext)

  return (
    <Container>
      <h1> {state.basket.length ?
        `Siz ${state.basket.length} ta  mahsulot xarid qildingiz` :
        `Siz mahsulot xarid qilmadingiz`}</h1>
      
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Product</Table.Th>
            <Table.Th>Tittle</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Quantitiy</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
       
          {
        state?.basket?.map((value) => {
          return (
            <Table.Tr key={value.id}>
              <Table.Td><Image src={value.image}/></Table.Td>
              <Table.Td>{value.name}</Table.Td>
              <Table.Td>${value.price}</Table.Td>
              <Table.Td>
                <Minus onClick={() => 
                  dispatch({ type: 'minus', payload: { id: value.id } })}/>
                {value.quantity} <Plus onClick={() => 
                  dispatch({ type: 'plus', payload: { id: value.id } })}/></Table.Td>
                  <Table.Td color='#46A358'>
                  ${value.price*value.quantity}
                  </Table.Td>

              <Table.Td>
              <Delet onClick={() => dispatch({ type: 'delet', payload: { id: value.id } })}/>
              </Table.Td>
              
              
             
            </Table.Tr>
          )
        })
      }
        </Table.Tbody>
      </Table>
    </Container>
  )
}
