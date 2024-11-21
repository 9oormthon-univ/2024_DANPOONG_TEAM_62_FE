import styled from "styled-components";
import { b2, flexCenterColumn, h1 } from "../../../global/common";
import theme from "../../../global/theme";

const S={};

S.Container=styled.div`
    ${flexCenterColumn}
    overflow-x: hidden;
    width:100%;
    background-color: ${theme.PALETTE.background};
    box-sizing: border-box;
    min-width: 1280px;
    padding:5% 10%;
    position: relative;
`
S.Title=styled.div`
    ${h1}
    color:#717171;
    align-self: flex-start;
`
S.EduListContainer=styled.div`
    position: relative;
    ${flexCenterColumn}
    top:5vh;
    width:100%;
    height:auto;
    border-radius:0.5rem;
    padding:2%;
    background-color: #CFDEC8 ;
`

S.PaginationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`;

S.PageButton = styled.button`
    ${b2}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${({ isActive}) =>
    isActive ? '#717171' : 'transparent'};
    color: ${({ isActive}) =>
    isActive ? 'white' : 'black'};
    
`;
export default S;