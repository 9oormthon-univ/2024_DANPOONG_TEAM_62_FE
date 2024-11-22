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

//테이블

S.Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5; /* 전체 배경 색 */
`;

S.EduListContainer = styled.div`
  background-color: #fff; /* 테이블 배경 흰색 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
  padding: 20px;
`;

S.Table = styled.table`
  width: 100%; /* 테이블 너비 고정 */
  height: 500px; /* 테이블 높이 고정 */
  border-collapse: collapse; /* 테이블 경계 없앰 */
  text-align: left;
  table-layout: fixed; /* 테이블 셀 크기 고정 */
`;

S.TableHeader = styled.th`
  background-color: #f0f0f0; /* 헤더 배경 색 */
  color: #333;
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #ddd; /* 헤더 아래 라인 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 말줄임 표시 (...) */
`;

S.TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa; /* 짝수 행 배경색 */
  }

  &:hover {
    background-color: #f7f7f7; /* 행에 마우스를 올릴 때 */
    cursor: pointer;
  }
`;

S.TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd; /* 행 사이의 라인 */
  color: #555;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 말줄임 표시 (...) */
`;

//페이지네이션

S.PaginationContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    /* left:45%; */
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