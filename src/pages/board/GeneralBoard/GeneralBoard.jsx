import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./GeneralBoard.css";

const GeneralBoard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const posts = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1, // 게시글 ID 추가
        title: `자유게시판 게시글 ${index + 1}`,
        content: `이것은 자유게시판 게시글 ${index + 1}의 내용입니다.`,
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 50),
        date: `2024-11-${17 + index}`,
        user: `user${index + 1}`,
    }));

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
                    <input type="text" className="search-bar" placeholder="검색어를 입력하세요" />
                    <button className="search-button">🔍</button>
                </div>
            </div>

            {/* 게시글 목록 */}
            <div className="post-list">
                {posts.map((post) => (
                    <div
                        key={post.id}
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
                            작성일 : {post.date} | 작성자 : {post.user}
                        </div>
                    </div>
                ))}
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
