import styled from "styled-components";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h3 } from "../../../global/common";
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
    margin-bottom: 20px;
`
//검색창
S.SearchBarContainer = styled.div`
    display: flex;
    align-self: flex-start;
    margin-bottom: 20px;
    position: relative;
`;

S.SearchInput = styled.input`
    ${b4}
    outline: none;
    width:350px;
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 30px;
`;

S.SearchButton = styled.div`
    /* padding: 10px; */
    position: absolute;
    background-color: white;
    border: none;
    bottom:8px;
    right:12px;
    cursor: pointer;
    img {
        width: 100%;
    }
`;


//테이블

S.EduListContainer = styled.div`
  background-color: rgba(194, 219, 181, 0.3); 
  border-radius: 20px; 
  padding: 30px;
  padding-top: 50px;
  ${flexCenterColumn}
  
`;

S.Table = styled.table`
  width: 100%; /* 테이블 너비 고정 */
  height: 600px; /* 테이블 높이 고정 */
  border-collapse: separate; /* 테이블 경계 없앰 */
  text-align: left;
  table-layout: fixed; /* 테이블 셀 크기 고정 */
  border-radius: 10px; /* 테이블 모서리 둥글게 */
  overflow: hidden; /* 둥근 모서리 외부 잘리도록 설정 */
`;

S.TableHeader = styled.th`
    text-align: center;
    vertical-align: middle;
    background-color: #f0f0f0; 
    ${b1}
    color:black;
    font-weight: bold;
    padding: 15px;
    border-bottom: 2px solid #ddd; /* 헤더 아래 라인 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 말줄임 표시 (...) */
`;

S.TableRow = styled.tr`
  background-color: white;
  height:55px;
  &:hover {
    background-color: #f7f7f7; /* 행에 마우스를 올릴 때 */
    cursor: pointer;
  }
`;

S.TableData = styled.td`
    text-align: center;
    vertical-align: middle;
    padding: 10px;
    border-bottom: 1px solid #ddd; /* 행 사이의 라인 */
    ${b4}
    color:#222222;
    /* color:black; */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 말줄임 표시 (...) */
`;

//페이지네이션

S.PaginationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin:3% 0;
    width:10%;
`;

S.PageButton = styled.button`
    ${b2}
    padding: 0% 9px;
    /* width:30px; */
    /* height:30px; */
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