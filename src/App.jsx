import React, { Component } from 'react'
import { data } from './data'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            users:data,
            selected:'id'
        }
    }
  render() {
   
    let onSearch=(e)=>{
        const {value}=e.target
       let res=data.filter((item)=>item[this.state.selected].toString()
       .toLowerCase().includes(value))
       this.setState({users:res})
      
    }
    let onSelect=(e)=>{
        this.setState({selected:e.target.value})
    }
    let onDelet=(id)=>{

        let res=this.state.users.filter((value)=>value.id !== id )
        this.setState({users:res})
    }
    return (
      <div>
        <div className="container">
            <input type="text" onChange={onSearch} />
            <select onClick={onSelect} >
                <option value="id">id</option>
                <option value="name">name</option>
                <option value="status">status</option>
            </select>
            <table >
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
           
            <tbody>
            {
                this.state.users.map((value)=>{
                    return(
                        <tr key={value.id}>
                            <td> {value.id}</td>
                            <td> {value.name}</td>
                             <td>{value.status}</td>
                             <td> <button onClick={()=>onDelet(value.id)}>Delete</button> </td>
                        </tr>
                      
                    )
                })
            }
            </tbody>
            </table>
        </div>

      </div>
    )
  }
}
