import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

// 검색
function SearchArea() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }
    // 검색어와 함께 Gemini 페이지로 이동
    navigate("/info/chat", { state: { searchTerm } }); // /info/chat 경로로 이동
  };

  return (
    <div className="searchArea">
      <h2>Gemini에게 질문하세요!</h2>
      <div className="searchBar">
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(); // Enter 키로 검색 실행
          }}
        />
        <button onClick={handleSearch}>🔍</button>
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
        <h3 className="section-title">best</h3>
        <div className="card-grid">
          {bestCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="board-column">
        <h3 className="section-title">최신 정보</h3>
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
