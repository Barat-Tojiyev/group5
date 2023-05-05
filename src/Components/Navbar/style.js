import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icon/logo.svg'


const Container=styled.div`
height: 60px;
border: 0.3px solid rgba(70, 163, 88, 0.5);
display:flex;
align-items:center;
justify-content:space-around;
`
const Icon=styled.div`
`
Icon.Logo=styled(logo)`
width: 35px;
margin-right:10px;
`
const Description=styled.p`
 color:${({color})=>color&& color} ;
 font-size: 20px;
 text-transform: uppercase;
 font-weight: 700;
 display:flex;
align-items:center;
justify-content:center;
 

`
const UL=styled.ul`
display:flex;
align-items:center;
justify-content:center;
gap: 20px;
`
 UL.LI=styled.li`
 list-style-type: none;
`
const Button=styled.button`
width: 100px;
height: 35px;
background-color: #46A358;
color:#fff;
border: none;
border-radius: 5px;
cursor: pointer;
:active{
    transform: scale(0.97);
}
`

export {Container,Icon,Description,UL,Button}