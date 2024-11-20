import styled from "styled-components";
import { b1, b3, flexCenter, flexCenterColumn, h1, h2, h3 } from "../../global/common";
import theme from "../../global/theme";

const S = {};


S.User=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    img{
        display: block;
        width:50px;
        border-radius:50%;
        /* align-self: flex-start; */
    }
    div{
        ${b1}
        /* align-self: flex-end; */
    }
`
S.Kakao=styled.div`
    ${flexCenter}
    justify-content: space-around;
    ${b3}
    width: 100%;
`
S.LogoutButton=styled.div`
    ${flexCenter}
    width:80px;
    height:35px;
    color:#94BC80;
    border:1px solid #94BC80;
    border-radius:10px;
    cursor:pointer;
`
S.WithdrawalButton=styled.div`
    ${flexCenter}
    width:80px;
    height:35px;
    color:#6E6E6E;
    background-color: rgba(148,188,128,0.5);
    border:1px solid  rgba(148,188,128,0.5);
    border-radius:10px;
    cursor:pointer;
`
export default S;