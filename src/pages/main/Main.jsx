import React, { useEffect, useState } from "react";
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
      <h2>농업 창업에 대해 질문해보세요!</h2>
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
function Card2({ title, content, likes,createdAt,name }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div>❤️ {likes}</div>
      <div className="card-footer">
      <div>{name}</div>
      <div>{createdAt}</div>
      </div>
      

    </div>
  );
}
// 카드 컴포넌트
function Card({ title, eduTarget, area2Nm, applEdDt,seq, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>지원대상: {eduTarget || "정보 없음"}</p>
      <p>지역: {area2Nm || "정보 없음"}</p>
      <div className="card-footer">
        
        <p>마감일: {applEdDt}</p>
      </div>
    </div>
  );
}

// 게시판 영역 컴포넌트
function BoardSection() {
  const navigate = useNavigate();
  const YOUNG_FARMER_API_KEY =
    "PdNrP5LqaL3z2dqsOzW9yUG%2BFGiTXklB3wanUqSbFLUB5hLJLHGxF%2BtpnLdPmL1p%2BQOzkikq9w3VlwtSySFwIA%3D%3D";
  const [latestInfo, setLatestInfo] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);

  const fetchLatestInfo = async () => {
    const url = `https://apis.data.go.kr/1390000/youngV2/policyListV2?typeDv=json&serviceKey=${YOUNG_FARMER_API_KEY}&rowCnt=4&cp=1`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      const currentDate = new Date();
      const filteredData = data.policy_list.filter((entry) => {
        const endDate = new Date(entry.applEdDt);
        return endDate >= currentDate; // 현재 날짜 이후에 마감일이 있는 데이터만 포함
      });

      setLatestInfo(filteredData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching latest info:", error);
      setError("최신 정보를 불러오는 데 실패했습니다.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestInfo();
  }, []);

  const bestCards = [
    { title: "날씨", content:"오늘은 농사하기 좋은 날씨구먼...", likes:3, createdAt:"2024-11-23", name:"요정" },
    { title: "제목", content:"내용입니다...............", likes:25, createdAt:"2024-11-23", name:"민정" },
    { title: "제목", content:"내용입니다...............", likes:12, createdAt:"2024-11-23", name:"강정" },
    { title: "제목", content:"내용입니다...............", likes:8, createdAt:"2024-11-23", name:"남정" },
  ];

  // 글 클릭 시 상세보기 페이지로 이동
  const goToEduDetail = (seq) => {
    navigate(`/info/policy/detail?seq=${seq}`);
  };

  return (
    <div className="board-section">
      {/* Best 섹션 */}
      <div className="board-column">
        <h3 className="section-title">best</h3>
        <div className="card-grid">
          {bestCards.map((card, index) => (
            <Card2 key={index} {...card} />
          ))}
        </div>
      </div>

      {/* 최신 정보 섹션 */}
      <div className="board-column">
        <h3 className="section-title">최신 정보</h3>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : latestInfo.length > 0 ? (
          <div className="card-grid">
            {latestInfo.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                eduTarget={item.eduTarget || "정보 없음"}
                area2Nm={item.area2Nm}
                applEdDt={item.applEdDt}
                seq={item.seq}
                onClick={() => goToEduDetail(item.seq)}
              />
            ))}
          </div>
        ) : (
          <div>최신 정보를 불러올 수 없습니다.</div>
        )}
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
