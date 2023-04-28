import styled from "styled-components";
import bg from '../../assets/bg.png'

 const Container=styled.div`
 height: 93vh;
 background: url(${bg});
 

`
const Wrapper=styled.div`
padding-top: 150px;
margin-left: 150px;

`
const Description=styled.p`
font-size: ${({fs})=>fs&&fs};
font-weight: ${({fw})=>fw&&fw};
color: ${({color})=>color&& color};
margin-top: ${({mt})=>mt && mt};
width: ${({width})=>width&&width};
line-height: ${({lineHeight})=>lineHeight&& lineHeight};
`
const Input=styled.input`
width: 268px;
height: 45px;
outline: none;
border: 1px solid #6F2CFF;
border-radius: 27.5px 0px 0px 27.5px;
padding: 0 20px;
`
const Button =styled.button`
width:167px;
height: 45px;
border: none;
background: #6F2CFF;
border-radius: 0px 27.5px 27.5px 0px;
color: #fff;
cursor: pointer;`
const Section=styled.div`
margin-top:30px`

export {Container,Wrapper,Description,Input,Button,Section}