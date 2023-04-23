import styled from "styled-components";


const Container =styled.div`
width: 80%;
margin:  0 auto;

`
const H1=styled.h1`
text-align: center;
font-weight: 400;
margin-top: 50px;
`
const Table=styled.table`
margin-top: 50px;
width: 100%;
background: #fff;
`
const Thead=styled.thead`
`
const Tbody=styled.tbody`
`
const Tr=styled.tr`

:nth-child(even){
   background-color: #ddd;
}
`
const Th=styled.th`
padding: 20px 0;
`
const Td=styled.td`
padding: 20px ;
text-align: center;

`
const Button=styled.button`
padding: 10px 30px;
border: none;
color: white;
background: ${({bg})=>bg&&bg};
cursor: pointer;

`
export {Container,H1,Table,Thead,Tr,Th,Tbody,Td,Button}