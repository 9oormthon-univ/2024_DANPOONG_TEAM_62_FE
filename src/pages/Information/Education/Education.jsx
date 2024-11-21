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
    const pageGroupSize = 5; // 페이지 그룹 크기
    const navigate=useNavigate();
    //전체 게시글 목록 조회
    const fetchEducationData = async () => {
        const url = `https://apis.data.go.kr/1390000/youngV2/eduListV2?typeDv=json&serviceKey=${YOUNG_FARMER_API_KEY}&rowCnt=10&cp=2`;
    
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('응답 데이터:', data);
        } catch (error) {
            console.error('요청 중 오류 발생:', error);
        }
    };
    
    useEffect(() => {
        fetchEducationData();
    }, []);

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
                {/* <S.PostList>
                    {posts.map((post) => (
                    <S.PostItem key={post.boardId} onClick={() => goToPostDetail(post.boardId)}>
                        <S.TitleBody>
                        <S.PostTitle>{post.title}</S.PostTitle>
                        <S.PostContent>{post.content}</S.PostContent>
                        </S.TitleBody>
                        {post.imageUrls?.[0] && (
                        <S.PostImage>
                            <img src={post.imageUrls[0]} />
                        </S.PostImage>
                        )}
                        <S.UnderTitleContainer>
                        <S.LikeContainer>
                            <FontAwesomeIcon
                            icon={post.isLiked ? filledHeart : emptyHeart}
                            onClick={() => handleLikeClick(post.boardId, post.isLiked)}
                            />
                            <div>{post.likeCount}</div>
                        </S.LikeContainer>
                        <S.CommentContainer>
                            <FontAwesomeIcon icon={faComment} />
                            <div>{post.commentCount}</div>
                        </S.CommentContainer>

                        <S.PostInfo>
                            {new Date(new Date(post.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}
                        </S.PostInfo>

                        </S.UnderTitleContainer>
                    </S.PostItem>
                    ))}
                </S.PostList> */}

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