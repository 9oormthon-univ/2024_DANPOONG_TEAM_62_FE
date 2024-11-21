import React from 'react';
import './GeneralBoard.css';

const GeneralBoard = () => {
    const posts = [
        { title: "자유게시판 게시글 1", likes: 50, comments: 20, date: "2024-11-17", user: "user1" },
        { title: "자유게시판 게시글 2", likes: 80, comments: 35, date: "2024-11-18", user: "user2" },
        { title: "자유게시판 게시글 3", likes: 100, comments: 50, date: "2024-11-19", user: "user3" },
        { title: "자유게시판 게시글 4", likes: 20, comments: 5, date: "2024-11-20", user: "user4" },
    ];
    
    return (
        <div className="general-board-container">
            {/* 버튼과 검색창을 포함하는 컨테이너 */}
            <div className="action-wrapper">
                <div className="button-wrapper">
                    <button className="board-button">지역별 게시판</button>
                    <button className="board-button">자유게시판</button>
                    <button className="board-button">QnA</button>
                </div>
                <div className="searchBar">
                    <input type="text" className="search-bar" placeholder="검색어를 입력하세요" />
                    <button className="search-button">🔍</button>
                </div>
            </div>

            {/* 지역 버튼 영역 */}
            <div className="region-wrapper">
                <button className="region-button">경기도</button>
                <button className="region-button">강원도</button>
                <button className="region-button">충청북도</button>
                <button className="region-button">충청남도</button>
                <button className="region-button">경상북도</button>
                <button className="region-button">경상남도</button>
                <button className="region-button">전라북도</button>
                <button className="region-button">전라남도</button>
                <button className="region-button">제주도</button>
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
        </div>
    );
};

export default GeneralBoard;
