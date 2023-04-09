import React, { Component } from 'react'
import {  Container, Description, Header, Icon, Main } from './style'


export default class App extends Component {
  render() {
    return (    
        <Container>
        <Header>
          <Description fs='30px' color='#fff'>Navbar</Description>
          <Icon/>
        </Header>
        <Main>
          <Description fs='100px' fw='700' color='red'>Hello World</Description>
          <Description  color='red'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam consequuntur debitis earum doloribus et hic a beatae enim eaque, natus quidem aspernatur veniam deleniti quis voluptatibus ab vel quasi?</Description>
        </Main>
        </Container>
       
    )
  }
}
