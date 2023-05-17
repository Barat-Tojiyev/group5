import styled from "styled-components";

const Container=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 30px;
margin:0 auto;
width: 90%;
`
const Image=styled.img`
`
const Description=styled.p`
font-size: ${(fs)=>fs&&fs};
font-weight: ${(fw)=>fw&&fw};
color: ${({color})=>color&&color};
`
const Button =styled.button`
width: 50%;
height: 30px;
color: #fff;
border: none;
border-radius: 10px;
background-color: #7431F8;
cursor: pointer;
:active{
    transform: scale(0.97);
}
`
const Sale=styled.button`
height: 29px;
width: 80px;
background-color:  #46A358;
color: white;
border: none;
position: absolute;
margin-top: 20px;
`

export {Container,Image,Description,Button,Sale}