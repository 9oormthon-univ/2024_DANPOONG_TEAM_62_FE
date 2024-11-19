import styled from "styled-components";
import { b2, flexCenter, flexCenterColumn, h2 } from "../../global/common";
import theme from "../../global/theme";

const S={};
S.Background=styled.div`
    overflow-x: hidden;
    width:100%;
    height:100vh;
    background-color: ${theme.PALETTE.background};
    box-sizing: border-box;
    min-width: 1280px;
    ${flexCenter}
`
S.LoginComponent=styled.div`
    /* margin: auto; */
    ${flexCenterColumn}
    position:relative;
    width:653px;
    height:354px;
    border-radius: 15px;
    background-color:white;  
    
    div:first-child {
        position: absolute;
        top:10%;
        ${h2}
        
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
        display: none;
    }
    div:nth-child(3) {
        ${b2}
        position: absolute;
        top:37%;
        
    }
    div:nth-child(4) {
        ${b2}
        position: absolute;
        top:47%;
        
    }
    
`

S.kakaoLoginButton=styled.div`
    position: absolute;
    top:75%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 100%; 
    img {
        width: 60%; 
    }
    
`
export default S;