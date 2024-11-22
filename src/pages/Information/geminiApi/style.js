import styled from "styled-components";
import { b1, b2, b3, flexCenterColumn, h3 } from "../../../global/common";
import theme from "../../../global/theme";

const S = {};

S.Container=styled.div`
    ${flexCenterColumn}
    overflow-x: hidden;
    width:100%;
    background-color: ${theme.PALETTE.background};
    box-sizing: border-box;
    min-width: 1280px;
    padding:5% 10%;
    /* margin: auto; */
    position: relative;
    
   
`
S.TitleText=styled.div`
    ${h3}
    align-self: flex-start;
    line-height: 1.3;
    div{
        color:#222222;
    }
    
`
S.CategoryContainer=styled.div`
    width:100%;
    margin-top: 30px;
    align-self: flex-start;    
    
`
S.Category=styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
     
     
     div{
        ${b1}
        padding:10px 23px;
        border-radius: 50px;
        border: 1px solid #94BC80;
        background-color: white;
        color: #94BC80;
     }
     
`
//채팅창
S.ChatContianer=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
    background-color: white;
    height:650px;
    border-radius: 15px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    scrollbar-width:none;
    padding:30px 20px 110px 20px;
   
`
S.ChatInputContainer = styled.div`
    position: absolute;
    align-self: center;
    bottom:10%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 60%;
    padding: 7px 15px;
    background-color: #e5e5e5;
    border-radius: 15px;
`;

S.InputField = styled.input`
    ${b2}
    flex: 1;
    border: none;
    outline: none;
    /* padding: 5px; */
    background-color: transparent;
`;

S.SendButton = styled.button`
    ${b1}
    margin-left: 10px;
    padding: 10px 15px;
    background-color: gray;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: rgba(148,188,128);
    }
`;

S.UserMessage = styled.div`
  align-self: flex-end; 
  background-color: rgba(148,188,128,0.5);
  ${b3}
  color: #717171; 
  padding: 15px 20px; 
  border-radius: 15px 0 15px 15px; 
  margin: 5px 10px; 
  /* width: 90%;  */
  word-wrap: break-word; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;


S.AIMessage = styled.div`
  align-self: flex-start; 
  padding: 10px 15px; 
  margin: 5px 10px; 
  max-width: 100%;
  ${b3}
  line-height: 1.3;

`;
export default S;
