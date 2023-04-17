import React, { Component } from 'react'
import App from './App'

export default class App1 extends Component {
    constructor(props){
        super(props)
        this.state={
            count:12
        }
    }
  render() {
    let onPluss =()=>{
        this.setState({count:this.state.count+1}) 
    }
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={onPluss}>pluss</button>
        <App count={this.state.count}/>
      </div>
    )
  }
}
