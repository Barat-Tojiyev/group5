import styled from "styled-components";
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
const Container=styled.div`
width: 90%;
margin: 0 auto;
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
`
Table.Td=styled.td`
padding: 10px 20px;
color: ${({color})=>color &&color};
text-align: center;

`
const Image=styled.img`
width:70px;
height:70px;`

const Plus=styled(AiFillPlusCircle)`
color: #46A358;
cursor: pointer;
`
const Minus=styled(AiFillMinusCircle)`
color:#46A358;
cursor: pointer;
`
const Delet =styled(AiFillDelete)`
color:#f00;
cursor: pointer;
`
export {Container,Table,Image, Plus,Minus,Delet}