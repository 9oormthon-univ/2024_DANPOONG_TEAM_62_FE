import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./GeneralBoard.css";
import apiClient from "../../../api/apiClient";

const GeneralBoard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]); // 전체 게시글 데이터
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

     // 서버에서 게시글 가져오기
     const fetchPosts = async () => {
        try {
            const response = await apiClient.get("/post/latest");
            console.log(response);
            const fetchedPosts = response.data; // 서버 응답 데이터
            setPosts(fetchedPosts); // 상태에 저장
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]); // 에러 시 빈 배열로 설정
        }
    };

    // 페이지가 로드될 때 서버에서 게시글 데이터를 가져옴
    useEffect(() => {
        fetchPosts();
    }, []);
    
    
     // 검색어에 따라 게시글 필터링
     const filteredPosts = posts.filter((post) =>
     post.title.toLowerCase().includes(searchTerm.toLowerCase())
 );
    // 검색어가 변경될 때마다 게시글 필터링
    // useEffect(() => {
    //     const filteredPosts = initialPosts.filter((post) =>
    //         post.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setPosts(filteredPosts);
    // }, [searchTerm]);

    // 게시글 클릭 핸들러
    const handlePostClick = (post) => {
        navigate("/board/post-detail", { state: { post } });
    };

    return (
        <div className="general-board-container">
            {/* 버튼과 검색창을 포함하는 컨테이너 */}
            <div className="action-wrapper">
                <div className="button-wrapper">
                    <Link
                        to="/board/regional"
                        className={`board-button ${location.pathname === "/board/regional" ? "active" : ""}`}
                    >
                        지역별 게시판
                    </Link>
                    <Link
                        to="/board/general"
                        className={`board-button ${location.pathname === "/board/general" ? "active" : ""}`}
                    >
                        자유게시판
                    </Link>
                    <Link
                        to="/board/q-a"
                        className={`board-button ${location.pathname === "/board/q-a" ? "active" : ""}`}
                    >
                        QnA
                    </Link>
                </div>
                <div className="searchBar">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="검색어를 입력하세요"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* 게시글 목록 */}
            <div className="post-list">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div
                            key={post.postId}
                            className="post-item"
                            onClick={() => handlePostClick(post)}
                            style={{ cursor: "pointer" }} // 커서 모양 변경
                        >
                            <h3 className="post-title">{post.title}</h3>
                            <div className="post-meta">
                                <span>❤️ {post.likes}</span>
                                <span>💬 {post.comments}</span>
                            </div>
                            <div className="post-info">
                                작성일 : {new Date(post.createdAt).toLocaleDateString("ko-KR")} | 작성자 : {post.userId}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-posts">검색된 게시물이 없습니다.</div>
                )}
            </div>

            {/* 푸터 영역 */}
            <footer className="footer">
                <button
                    className="create-post-button"
                    onClick={() => navigate("/board/write", { state: { category: "자유게시판" } })}
                >
                    글 작성하기
                </button>
            </footer>
        </div>
    );
};

export default GeneralBoard;
