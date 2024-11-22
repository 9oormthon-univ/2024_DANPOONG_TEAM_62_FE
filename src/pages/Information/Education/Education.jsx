import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';

const Education = () => {
    const YOUNG_FARMER_API_KEY= process.env.REACT_APP_YOUNG_FARMER_API_KEY;
    const [eduLists, setEduLists] = useState([]); 
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹
    const pageSize = 10; // 한 페이지에 표시할 게시글 수
    const pageGroupSize = 6; // 페이지 그룹 크기
    const navigate=useNavigate();
    
    // 현재 날짜 가져오기
    const getCurrentDate = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    };

    // YYYY-MM을 YYYY-MM-DD 형식으로 변환 (첫째 날 또는 마지막 날)
    const normalizeDate = (dateString, isEndOfMonth = false) => {
        if (dateString.length === 7) {
            const [year, month] = dateString.split('-').map(Number);
            const lastDay = new Date(year, month, 0).getDate(); // 해당 월의 마지막 날 계산
            return isEndOfMonth
                ? `${year}-${String(month).padStart(2, '0')}-${lastDay}` // 마지막 날
                : `${year}-${String(month).padStart(2, '0')}-01`; // 첫째 날
        }
        return dateString; // YYYY-MM-DD 형식 그대로 반환
    };

    //전체 게시글 목록 조회
    const fetchEducationData = async (page) => {
        const url = `https://apis.data.go.kr/1390000/youngV2/eduListV2?typeDv=json&serviceKey=${YOUNG_FARMER_API_KEY}&rowCnt=10&cp=${page}`;
    
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            
            const currentDate = getCurrentDate();

            // 종료일이 현재 날짜 이후인 데이터 필터링
            const filteredEduList = data.edu_list.filter(edu => {
                const endDate = normalizeDate(edu.applEdDt, true); // 종료일 YYYY-MM-DD 형식으로 변환
                return endDate >= currentDate; // 종료일이 현재 날짜 이후인 경우만 포함
            });

           
            setEduLists(filteredEduList);
            setTotalPages(6);
            console.log('필터링된 응답 데이터:', filteredEduList);
        } catch (error) {
            console.error('요청 중 오류 발생:', error);
        }
    };
    
    useEffect(() => {
        fetchEducationData(currentPage+1);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    
      const handleNextPageGroup = () => {
        if ((currentPageGroup + 1) * pageGroupSize < totalPages) {
          setCurrentPageGroup(currentPageGroup + 1);
          setCurrentPage((currentPageGroup + 1) * pageGroupSize); // 다음 그룹 첫 페이지로 이동
        }
      };
    
      const handlePrevPageGroup = () => {
        if (currentPageGroup > 0) {
          setCurrentPageGroup(currentPageGroup - 1);
          setCurrentPage((currentPageGroup - 1) * pageGroupSize); // 이전 그룹 첫 페이지로 이동
        }
      };
    
      const startPage = currentPageGroup * pageGroupSize;
      const endPage = Math.min(startPage + pageGroupSize, totalPages);   
    
      //게시글 상세보기
    const goToEduDetail=(boardId)=>{
        navigate(`/info/edu/detail?boardId=${boardId}`);
    }
      return (
        <S.Container>
            <S.EduListContainer>
                <S.Title>교육</S.Title>
                
                    <S.Table>
                    <thead>
                        <tr>
                            <S.TableHeader>지역</S.TableHeader>
                            <S.TableHeader>교육대상</S.TableHeader>
                            <S.TableHeader>교육명</S.TableHeader>
                            <S.TableHeader>신청마감일</S.TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {eduLists.map((edu) => (
                            <S.TableRow key={edu.seq} onClick={() => goToEduDetail(edu.seq)}>
                                <S.TableData>{edu.area2Nm}</S.TableData>
                                <S.TableData>{edu.eduTarget}</S.TableData>
                                <S.TableData>{edu.title}</S.TableData>
                                <S.TableData>
                                    {edu.applEdDt}{" "}
                                    <span>
                                        (D-{Math.ceil(
                                            (new Date(normalizeDate(edu.applEdDt, true)) - new Date()) /
                                            (1000 * 60 * 60 * 24)
                                        )})
                                    </span>
                                </S.TableData>
                            </S.TableRow>
                        ))}
                    </tbody>
                </S.Table>
            

            {/* 페이지네이션 */}
            <S.PaginationContainer>
                    <S.PageButton onClick={handlePrevPageGroup} disabled={currentPageGroup === 0}>
                    &lt;
                    </S.PageButton>
                    {Array.from({ length: endPage - startPage }, (_, index) => (
                    <S.PageButton
                    key={index}
                    onClick={() => handlePageChange(startPage + index)}
                    isActive={currentPage === startPage + index} // 활성 페이지 스타일 적용
                    
                    >
                        {startPage + index + 1}
                    </S.PageButton>
                    ))}
                <S.PageButton onClick={handleNextPageGroup} disabled={endPage >= totalPages}>
                    &gt;
                </S.PageButton>
            </S.PaginationContainer>
    
        </S.EduListContainer>

        </S.Container>
    );
};

export default Education;