import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./RegionalBoard.css";

const RegionalBoard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 활성화된 지역 버튼을 추적하기 위한 state
    const [activeRegion, setActiveRegion] = useState("");

    const posts = [
        { title: "자유게시판 게시글 1", likes: 50, comments: 20, date: "2024-11-17", user: "user1" },
        { title: "자유게시판 게시글 2", likes: 80, comments: 35, date: "2024-11-18", user: "user2" },
        { title: "자유게시판 게시글 3", likes: 100, comments: 50, date: "2024-11-19", user: "user3" },
        { title: "자유게시판 게시글 4", likes: 20, comments: 5, date: "2024-11-20", user: "user4" },
    ];

    // 지역 버튼 클릭 핸들러
    const handleRegionClick = (region) => {
        setActiveRegion(region);
    };

    // 글 작성하기 버튼 클릭 핸들러
    const handleCreatePostClick = () => {
        navigate("/board/write", { 
            state: { 
                category: "지역별 게시판", 
                subcategory: activeRegion || "전체" // 선택된 지역이 없으면 "전체"
            } 
        });
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
                    <input type="text" className="search-bar" placeholder="검색어를 입력하세요" />
                    <button className="search-button">🔍</button>
                </div>
            </div>

            {/* 지역 버튼 영역 */}
            <div className="region-wrapper">
                {["경기도", "강원도", "충청북도", "충청남도", "경상북도", "경상남도", "전라북도", "전라남도", "제주도"].map((region) => (
                    <button
                        key={region}
                        onClick={() => handleRegionClick(region)}
                        className={`region-button ${activeRegion === region ? "active" : ""}`}>
                        {region}
                    </button>
                ))}
            </div>

            {/* 게시글 목록 */}
            <div className="post-list">
                {posts.map((post, index) => (
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
                ))}
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
