import styled from "styled-components";

const Container=styled.div`
width: 90%;
margin: 20px auto;
`
const Table=styled.table`
width: 70%;
margin: 20px auto;

`
Table.Tbody=styled.tbody`

`
Table.Thead=styled.thead`
`
Table.Tr=styled.tr`


`

Table.Th=styled.th`
padding: 10px 20px;
background-color: green;
color: #fff;
`
Table.Td=styled.td`
padding: 10px 20px;
color: ${({color})=>color &&color};
text-align: center;

`
export{Container,Table}