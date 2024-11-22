import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./RegionalBoard.css";

const RegionalBoard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 활성화된 지역 버튼을 추적하기 위한 state
    const [activeRegion, setActiveRegion] = useState("전체");

    // 게시글 데이터
    const posts = [
        { title: "경기도 게시글 1", likes: 50, comments: 20, date: "2024-11-17", user: "user1", region: "경기도" },
        { title: "강원도 게시글 1", likes: 80, comments: 35, date: "2024-11-18", user: "user2", region: "강원도" },
        { title: "충청북도 게시글 1", likes: 100, comments: 50, date: "2024-11-19", user: "user3", region: "충청북도" },
        { title: "경기도 게시글 2", likes: 20, comments: 5, date: "2024-11-20", user: "user4", region: "경기도" },
    ];

    // 지역 버튼 클릭 핸들러
    const handleRegionClick = (region) => {
        setActiveRegion(region); // 활성화된 버튼 설정
    };

    // 글 작성하기 버튼 클릭 핸들러
    const handleCreatePostClick = () => {
        navigate("/board/write", {
            state: {
                category: "지역별 게시판",
                subcategory: activeRegion !== "전체" ? activeRegion : null, // 선택된 지역만 전달
            },
        });
    };

    // 활성화된 지역에 따라 게시글 필터링
    const filteredPosts = activeRegion === "전체" ? posts : posts.filter((post) => post.region === activeRegion);

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
                    <input type="text" className="search-bar" placeholder="검색어를 입력하세요" />
                    <button className="search-button">🔍</button>
                </div>
            </div>

            {/* 지역 버튼 영역 */}
            <div className="region-wrapper">
                {["전체", "경기도", "강원도", "충청북도", "충청남도", "경상북도", "경상남도", "전라북도", "전라남도", "제주도"].map(
                    (region) => (
                        <button
                            key={region}
                            onClick={() => handleRegionClick(region)}
                            className={`region-button ${activeRegion === region ? "active" : ""}`}
                        >
                            {region}
                        </button>
                    )
                )}
            </div>

            {/* 게시글 목록 */}
            <div className="post-list">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <div key={index} className="post-item">
                            <h3 className="post-title">{post.title}</h3>
                            <div className="post-meta">
                                <span>❤️ {post.likes}</span>
                                <span>💬 {post.comments}</span>
                            </div>
                            <div className="post-info">
                                작성일 : {post.date} | 작성자 : {post.user}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-posts">선택한 지역에 게시물이 없습니다.</div>
                )}
            </div>

            {/* 푸터 영역 */}
            <footer className="footer">
                <button className="create-post-button" onClick={handleCreatePostClick}>
                    글 작성하기
                </button>
            </footer>
        </div>
    );
};

export default RegionalBoard;
