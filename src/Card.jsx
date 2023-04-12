import React,{useState} from 'react'
import { data } from './data'

const Card = () => {
    const [state,setState]=useState(data)
  return (
    <div className='box'>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
        {
        state.map((value)=>{
            return(
            <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>+998{value.phone}</td>
            </tr>
            ) 
        })
        }
            
        </tbody>
      </table>
       
    </div>
  )
}

export default Card