import React from 'react'
import { Button, Container, Description, Input, Section, Wrapper } from './style'


export const Card = () => {
  return (
    <Container>
      <Wrapper>
        <Description fw='600' fs='18px'>Lorem ipsum dolor sit amet.</Description>
        <Description fw='700' mt='30px' fs='60px'>Make ecommerce</Description>
        <Description fw='700' fs='60px' color='#6F2DFF'>More Personal</Description>
        <Description width='438px' mt='30px' lineHeight='30px'>
          Hundreds of brands use <b>Qubit CommerceAI</b>  to 
          power the next generation of product recommendations,
           badging and insights to build exceptional customer experiences.
        </Description>
        <Section>
        <Input placeholder='Enter your email'/>
        <Button>Book a demo</Button>
        </Section>
      </Wrapper>
    </Container>
  )
}
