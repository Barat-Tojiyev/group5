import styled from "styled-components";


const Container =styled.div`
width: 95%;
margin: 0 auto;
height: 7vh;
display: flex;
justify-content: space-between;
align-items: center;
`
const Section=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:  20px;
`
const Logo=styled.div`
font-size: 30px;
font-weight: 700;
`
const NavMenu=styled.ul`
display: flex ;
gap: 30px;
`
NavMenu.Item=styled.div`
cursor: pointer;
:hover{
    color: #f03690;
}
`
const Button=styled.button`
width:167px;
height: 40px;
background:#6F2CFF;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 100px;
color: #fff;
cursor: pointer;
`

export {Container,Section,Logo,NavMenu,Button}