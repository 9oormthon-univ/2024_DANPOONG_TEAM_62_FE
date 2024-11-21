import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./QA.css";

const QA = () => {
    const location = useLocation(); // 현재 경로 확인

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
                    <button className="create-post-button">글 작성하러 가기</button>
                </div>

                {/* QnA 목록 */}
                <div className="qa-list">
                    <p className="qa-question">Q. 사이트 이용 방법이 궁금해요.</p>
                    <p className="qa-question">Q. 청년농부만 사용할 수 있는 사이트인가요?</p>
                    <p className="qa-question">Q. 사이트에 잘못된 정보가 있어요.</p>
                </div>
            </div>
        </div>
    );
};

export default QA;
