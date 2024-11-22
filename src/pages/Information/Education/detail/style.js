import styled from 'styled-components';
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h2, h3 } from '../../../../global/common';
import theme from '../../../../global/theme';

const S={};

// 전체 컨테이너
S.Container = styled.div`
    ${flexCenterColumn}
    justify-content: space-evenly;
    align-items: flex-start;
    overflow-x: hidden;
    width:100%;
    background-color: ${theme.PALETTE.background};
    box-sizing: border-box;
    min-width: 1280px;
    padding:7% 10%;
    /* margin: auto; */
    position: relative;
`;
S.Component=styled.div`
    
    background-color:white;
    width:100%;
    padding: 50px 30px;
    border-radius: 15px;
    position: relative;
`
S.ImgContainer=styled.div`
    position: absolute;
    right:30px;
    top:30px;
    cursor: pointer;

`
// 왼쪽 컨테이너
S.LeftContainer = styled.div`
    margin-bottom: 30px;
    
`;

// 제목
S.Title = styled.h1`
    ${h3}
    color:#222222;
    margin-bottom: 20px;
`;

// 내용
S.Content = styled.div`
    ${b3}
    line-height: 1.5;
    color:#222222;
    white-space: pre-line; 
`;

// 오른쪽 컨테이너
S.RightContainer = styled.div`
   
    
`;

// 상세 정보 테이블
S.DetailTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

// 테이블 헤더
S.TableHeader = styled.th`
    width:170px;
    text-align: center;
    padding: 10px;
    ${b3}
    background-color: #f0f0f0;
    border: 1px solid #ddd;
`;

// 테이블 데이터
S.TableData = styled.td`
    padding: 10px;
    ${b4}
    border: 1px solid #ddd;
`;

// 로딩 상태 스타일
S.Loading = styled.div`
    text-align: center;
    font-size: 1.2rem;
    padding: 20px;
`;

S.Button=styled.div`
    ${b2}
    cursor: pointer;
    border-radius: 10px;
    padding:10px 20px;
    background-color: #717171;
    /* color:${theme.PALETTE.mainGreen}; */
    align-self: center;
    margin-top: 30px;
    
`
export default S;