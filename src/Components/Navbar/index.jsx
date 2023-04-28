import React from 'react'
import { Button, Container, Logo, NavMenu, Section } from './style'

export const Navbar = () => {
  return (
    <Container>
      <Section>
        <Logo>Qubit.</Logo>
      </Section>
      <Section>
        <NavMenu>
          <NavMenu.Item>Why Qubit?</NavMenu.Item>
          <NavMenu.Item>Products</NavMenu.Item>
          <NavMenu.Item>Solutions</NavMenu.Item>
          <NavMenu.Item>Customers</NavMenu.Item>
          <NavMenu.Item>Case studies</NavMenu.Item>
          <NavMenu.Item>Resources</NavMenu.Item>
          <NavMenu.Item>More</NavMenu.Item>
        </NavMenu>
      </Section>
      <Section>
        <Button>Book a demo</Button>
        <span>Log In</span>
      </Section>
    </Container>
  )
}
