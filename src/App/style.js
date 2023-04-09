
import styled from "styled-components";
import {AiOutlineMenu} from 'react-icons/ai'
import rasm  from "./img/rasm.jpg";

const Container=styled.div`

`
const Header=styled.div`
/* width: 100%; */
height: 70px;
background-color: #0A3D67;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 100px;
`

const Description=styled.p`
font-family:sans-serif;
color: ${({color})=>color && color };
font-size: ${({fs})=>fs && fs };
font-weight:${({fw})=>fw && fw } ;
`
const Icon=styled(AiOutlineMenu)`
color:white;
font-size:30px;`

const Main=styled.div`
height: 660px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: aqua;
background-image: url(${rasm});
background-size: cover;
`
export {Container,Header,Description,Icon,Main}