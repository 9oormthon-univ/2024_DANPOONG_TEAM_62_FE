import React from "react";
import "./Main.css";

// 검색
function SearchArea() {
  return (
    <div className="searchArea">
      <h2>gemini에게 질문하세요!</h2>
      <div className="searchBar">
        <input type="text" placeholder="검색어를 입력하세요..." />
        <button>🔍</button>
      </div>
    </div>
  );
}

// 카드 컴포넌트
function Card({ title, content, likes }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="card-footer">
        <span>❤️ {likes}</span>
      </div>
    </div>
  );
}

// 게시판 영역 컴포넌트
function BoardSection() {
  const bestCards = [
    { title: "농사의 비법", content: "글을 입력하세요...", likes: "99+" },
    { title: "농사의 비법", content: "글을 입력하세요...", likes: "99+" },
    { title: "농사의 비법", content: "글을 입력하세요...", likes: "99+" },
    { title: "농사의 비법", content: "글을 입력하세요...", likes: "99+" },
  ];

  const latestCards = [
    { title: "춘천지역 농부 대상", content: "글을 입력하세요...", likes: "99+" },
    { title: "춘천지역 농부 대상", content: "글을 입력하세요...", likes: "99+" },
    { title: "춘천지역 농부 대상", content: "글을 입력하세요...", likes: "99+" },
    { title: "춘천지역 농부 대상", content: "글을 입력하세요...", likes: "99+" },
  ];

  return (
    <div className="board-section">
      <div className="board-column">
        <h3>best</h3>
        <div className="card-grid">
          {bestCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="board-column">
        <h3>최신 정보</h3>
        <div className="card-grid">
          {latestCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Main 컴포넌트
const Main = () => {
  return (
    <div className="main-container">
      <SearchArea />
      <BoardSection />
    </div>
  );
};

export default Main;
