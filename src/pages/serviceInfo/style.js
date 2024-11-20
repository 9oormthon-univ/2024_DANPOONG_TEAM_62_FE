import styled from 'styled-components';

/* 컨테이너 */
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

/* 제목 스타일 */
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #4f8a4f;
  margin-bottom: 40px;
`;

/* 카드 컨테이너 */
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

/* 개별 카드 */
export const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 600px;
  text-align: left;
`;

/* 카드 제목 */
export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #94bc80;
  margin-bottom: 10px;
`;

/* 카드 내용 */
export const CardText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;
