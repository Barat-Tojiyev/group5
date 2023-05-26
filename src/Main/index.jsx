
import { useContext } from 'react'
import { userContext } from '../context'
import { Container,Table } from './style'
export const Main = () => {  
  const [state ,setState]=useContext(userContext)     
  return (
    <Container>
  <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>№</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Decription</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Image</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
       
          {
        state.map((value) => {
          return (
            <Table.Tr key={value.id}>
              <Table.Td borderBottom >{value.id}</Table.Td>
              <Table.Td>{value.category}</Table.Td>
              <Table.Td>{value.description}</Table.Td>
              <Table.Td>{value.title}</Table.Td>
              <Table.Td>${value.price}</Table.Td>
              <Table.Td><img src={value.image} height='50' /></Table.Td>         
            </Table.Tr> )
        })
      }
        </Table.Tbody>
      </Table>

    </Container>
  )
}
