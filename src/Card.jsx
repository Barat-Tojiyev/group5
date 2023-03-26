import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'parol'
        }
    }
  render() {
    let onEmail=(e)=>{
    this.setState({email:e.target.value})
    }
    return (
      <div className='container'>
        <div className="card">
            <h1 className='text'>Sign Up</h1>
            <p className='text_p'>Email {this.state.email}</p>
            <input onChange={onEmail} type="text" />
            <p className='text_p'>Pasword</p>
            <input type="password" />
            <button >Sign Up</button>
        </div>     
      </div>
    )
  }
}
