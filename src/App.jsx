import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      son:1,
      name:'Bobur',
      lastname:'Tuxtamurodov'
    }
  }
  render() {
    let son=1
    let onPlus=()=>{
      son++
      console.log(son);
    }
 let onPluss=()=>{
  this.setState({son:this.state.son+1})
  // console.log(this.state.son);
 }
 let onMinuss=()=>{
  this.setState({son:this.state.son-1})
 }
 let onName=(event)=>{
  // console.log(event.target.value);
  this.setState({name:event.target.value})
 }
 
 let onLastName=(event)=>{
  this.setState({lastname:event.target.value})
 }
    return (
      <div>
        
       <h1>{son}</h1>
       <button onClick={onPlus}>plus</button>
       <h1>{this.state.son}</h1>
       <button onClick={onPluss}>pluss</button>
       <button onClick={onMinuss}>minuss</button>
       <h1>This is name: {this.state.name}</h1>
       <input onChange={onName} type="password" />
       <h1>This is lastname: {this.state.lastname}</h1>
       <input onChange={onLastName} type="text" />




      </div>
    )
  }
}
