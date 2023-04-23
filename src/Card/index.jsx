import React, { useReducer } from 'react'
import { Container, H1, Table, Thead, Tr, Th, Tbody, Td, Button } from './style'
import { Data } from '../data/Data'

export const Card = () => {
    const [state, dispatch] = useReducer((state,action) => {
        
        switch(action.type){
            case 'delete': 
            let rel =state.mock.filter((value)=>value.id !== action.payload.id)
            return {...state,mock:rel}

            case 'edit':
                // let onEdit=state.mock.filter
                return{...state,edit:!state.edit}
                case 'edit':
                    // let onEdit=state.mock.filter
                    return{...state,edit:!state.edit}
                    
                    
            
                
                
        }

    },
        {
            mock: Data,
            edit:false
        })
       
    return (
        <Container>
            <H1>Table #09</H1>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Invoce</Th>
                        <Th>Custome</Th>
                        <Th>Ship</Th>
                        <Th>Price</Th>
                        <Th>Prushesed Price</Th>
                        <Th>Edit</Th>
                        <Th>Delet</Th>
                    </Tr>
                </Thead>
                <Tbody>


                    {
                        state.mock.map((value) => {
                            return (
                                <Tr key={value.id}>
                                    <Td>{value.invoce}</Td>
                                    <Td>{value.name}</Td>
                                    <Td>{value.country}</Td>
                                    <Td>${value.price}</Td>
                                    <Td>${value.price-(value.price/100*value.sale)}</Td>
                                    <Td>{
                                        state.edit ? <Button 
                                        onClick={()=>dispatch({type:'save',
                                        payload:{id:value.id}})}
                                         bg='#090'>
                                            Save
                                        </Button> : (
                                            <Button 
                                            onClick={()=>dispatch({type:'edit',
                                            payload:{id:value.id}})}
                                             bg='#009'>
                                                Edit
                                            </Button>   
                                        )
                                        
                                        }
                                        
                                        
                                    </Td>
                                    <Td> <Button bg='#900' 
                                    onClick={()=>dispatch({type:'delete',
                                    payload:{id:value.id}})}
                                    >Delet</Button></Td>
                                </Tr>
                            )
                        })
                    }


                </Tbody>
            </Table>
        </Container>
    )
}
