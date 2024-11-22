import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Writing.css";

const Writing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [category, setCategory] = useState(""); // 카테고리 상태
    const [subCategory, setSubCategory] = useState(""); // 서브카테고리 상태

    // 페이지가 로드되면 카테고리와 서브카테고리를 location.state 값으로 설정
    useEffect(() => {
        if (location.state?.category) {
            setCategory(location.state.category);
        }
        if (location.state?.subcategory) {
            setSubCategory(location.state.subcategory);
        }
    }, [location.state]);

    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const handleSubmit = () => {
        if (!category) {
            alert("카테고리를 선택해주세요!");
            return;
        }
        if (category === "지역별 게시판" && !subCategory) {
            alert("지역을 선택해주세요!");
            return;
        }
        alert(`게시물이 등록되었습니다!\n카테고리: ${category}\n지역: ${subCategory || "없음"}`);
        navigate("/board/regional");
    };

    return (
        <div className="write-post-container">
            <h1 className="write-post-title">게시물 작성하기</h1>
            <div className="write-post-form">
                {/* 카테고리 드롭다운 */}
                <select
                    className="category-select"
                    value={category}
                    disabled={!!location.state?.category} // 전달받은 카테고리 값이 있으면 비활성화
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">카테고리를 선택하세요</option>
                    <option value="자유게시판">자유게시판</option>
                    <option value="지역별 게시판">지역별 게시판</option>
                    <option value="QnA">QnA</option>
                </select>

                {/* 서브카테고리 드롭다운 */}
                {category === "지역별 게시판" && (
                    <select
                        className="subcategory-select"
                        value={subCategory}
                        onChange={(e) => setSubCategory(e.target.value)}
                    >
                        <option value="">지역을 선택하세요</option>
                        {["경기도", "강원도", "충청북도", "충청남도", "경상북도", "경상남도", "전라북도", "전라남도", "제주도"].map((region) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                )}

                <input type="text" className="post-title-input" placeholder="제목을 입력하세요." />
                <textarea className="post-content-input" placeholder="내용을 입력하세요."></textarea>
                <div className="file-upload">
                    <label htmlFor="file-upload">📎 파일 업로드</label>
                    <input type="file" id="file-upload" />
                </div>
                <div className="write-post-actions">
                    <button className="cancel-button" onClick={handleCancel}>
                        취소
                    </button>
                    <button className="submit-button" onClick={handleSubmit}>
                        등록
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Writing;
