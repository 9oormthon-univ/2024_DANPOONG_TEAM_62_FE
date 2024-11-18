import styled from "styled-components";
import { b1, flexCenterColumn, h1, h2, h3 } from "../../global/common";
import theme from "../../global/theme";

const S = {};

S.Background=styled.div`
    width:100%;
    height:100vh;
    min-width: 1280px;
    background-color: ${theme.PALETTE.background};
    position: relative;
`
S.StyledHeader = styled.header`
  
    display: flex;
    justify-content: space-between;
    width:100%;
    background-color: #94BC80;
    padding: 0 25px;
    height: 100px;
    position: relative;
    z-index: 999;
    overflow: hidden;
    transition: height 0.3s ease;
    height: ${({ isdropdownopen }) => (isdropdownopen ? '230px' : '100px')};
    &:hover {
        
        background: linear-gradient(to bottom, #94BC80 35%, rgba(148,188,128, 0.66));
        
    }

`;

S.Logo = styled.img`
   width:80%;
   margin-top: 6px;
`;

S.Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 70px; 
  align-self: flex-start;
  margin-top: 23px;
 
`;

S.NavItem = styled.div`
  position: relative;
  
  a {
    text-decoration: none;
    color: white;
    ${h3}
  }

  &:hover a {
    color: #717171;
  }
`;

S.DropdownContainer = styled.div`
  position: absolute;
  top: 100px; 
  width: 100%;
  
  display: flex;
  padding: 0; 
  box-sizing: border-box;
`;

S.Dropdown = styled.div`
  position: absolute; 
  ${flexCenterColumn}
  a {
    padding-bottom: 17px;
    color: white;
    text-decoration: none;
    ${b1}

    &:hover {
      color: #717171;
    }
  }

  &.dropdown1 {
    right:322px;
  }

  &.dropdown2 {
    right:186px; 
  } 
`;

S.ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

S.Layout=styled.div`
    position: absolute;
    top:100px;

`
export default S;
