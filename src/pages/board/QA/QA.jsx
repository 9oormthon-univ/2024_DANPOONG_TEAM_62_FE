import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./QA.css";

const QA = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 선택된 질문 ID를 관리하는 상태
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    // QnA 질문 목록과 답변 데이터
    const qnaData = [
        { id: 1, question: "Q. 사이트 이용 방법이 궁금해요.",answer: 
        (   <>
                <span className="bold-text">'게시판'</span> 카테고리에 글을 작성하여 농업 아이디어를 나누세요.<br />
                <span className="bold-text">'농업소식통'</span>에서는 농업과 관련된 정책들을 한 눈에 파악할 수 있어요.
            </>
        )}, 
        { id: 2, question: "Q. 청년농부만 사용할 수 있는 사이트인가요?", answer:
        (  <>
            저희 웹사이트는 현재 <span className="bold-text">'청년농부를 위한 웹사이트'</span>로 운영되고 있습니다.<br />
            향후 더 많은 농업인들을 위한 서비스를 준비할 수 있도록 노력하겠습니다.
        </>
        )},
        { id: 3, question: "Q. 사이트에 잘못된 정보가 있어요.", answer:  (  <>
            잘못된 정보를 발견하시면, 위의 <span className="bold-text">'글 작성하러 가기'</span>를 통해 게시글을 작성해주시기 바랍니다.<br />
            빠른 시일 내에 수정하도록 하겠습니다. 불편을 드려 죄송합니다.
        </>
        )},
    ];

    // 질문 클릭 시 처리 함수
    const handleQuestionClick = (id) => {
        setSelectedQuestion((prev) => (prev === id ? null : id)); // 같은 질문 클릭 시 닫힘
    };

    const handleCreatePost = () => {
        navigate("/board/write", { state: { category: "QnA" } });
    };

    return (
        <div className="qa-container">
            {/* 버튼만 포함하는 컨테이너 */}
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
            </div>

            {/* QnA 메인 컨텐츠 */}
            <div className="qa-content">
                <h1 className="qa-title">질문이 있으신가요?</h1>
                <p className="qa-subtitle">
                    저희 새싹 여름지기에게 질문이 있으신가요?<br />
                    게시판에 글을 남겨주시면, 곧바로 답변드리겠습니다.
                </p>
                <div className="create-post-wrapper">
                    <button className="create-post-button" onClick={handleCreatePost}>
                        글 작성하러 가기
                    </button>
                </div>

                {/* QnA 목록 */}
                <div className="qa-list">
                    {qnaData.map((item) => (
                        <div key={item.id} className="qa-item">
                            <p
                                className="qa-question"
                                onClick={() => handleQuestionClick(item.id)}
                            >
                                {item.question}
                            </p>
                            {selectedQuestion === item.id && (
                                <p className="qa-answer">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QA;
