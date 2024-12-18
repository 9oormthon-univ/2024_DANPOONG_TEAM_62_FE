import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./RegionalBoard.css";

const RegionalBoard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 지역 및 검색 상태
    const [activeRegion, setActiveRegion] = useState("전체");
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

    // 게시글 데이터
    const initialPosts = [
        { title: "경기도 게시글 1", likes: 50, comments: 20, date: "2024-11-17", user: "user1", region: "경기도" },
        { title: "강원도 게시글 1", likes: 80, comments: 35, date: "2024-11-18", user: "user2", region: "강원도" },
        { title: "충청북도 게시글 1", likes: 100, comments: 50, date: "2024-11-19", user: "user3", region: "충청북도" },
        { title: "충청남도 게시글 1", likes: 20, comments: 5, date: "2024-11-20", user: "user4", region: "충청남도" },
        { title: "제주도 게시글 2", likes: 20, comments: 7, date: "2024-11-20", user: "user4", region: "제주도" },
        { title: "전라남도 게시글 1", likes: 120, comments: 5, date: "2024-11-21", user: "user4", region: "전라남도" },
        { title: "전라남도 게시글 2", likes: 20, comments: 75, date: "2024-11-22", user: "user4", region: "전라남도" },
        { title: "전라남도 게시글 3", likes: 20, comments: 25, date: "2024-11-23", user: "user4", region: "전라남도" },
        { title: "안녕하세요", likes: 20, comments: 25, date: "2024-11-23", user: "user4", region: "경상북도" },
        { title: "오늘", likes: 20, comments: 25, date: "2024-11-23", user: "user4", region: "경상남도" },
        { title: "날씨가 좋네요", likes: 20, comments: 25, date: "2024-11-23", user: "user4", region: "전라북도" },
    ];

    const [filteredPosts, setFilteredPosts] = useState(initialPosts);

    // 검색어 또는 지역이 변경될 때 게시글 필터링
    useEffect(() => {
        const regionFilteredPosts =
            activeRegion === "전체"
                ? initialPosts
                : initialPosts.filter((post) => post.region === activeRegion);

        const searchFilteredPosts = regionFilteredPosts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredPosts(searchFilteredPosts);
    }, [activeRegion, searchTerm]); // activeRegion 또는 searchTerm 변경 시 실행

    // 지역 버튼 클릭 핸들러
    const handleRegionClick = (region) => {
        setActiveRegion(region);
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
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="검색어를 입력하세요"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
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
                        <Link
                            key={index}
                            to="/board/detail"
                            state={{ post }} // 게시글 데이터 전달
                            className="post-item"
                        >
                            <h3 className="post-title">{post.title}</h3>
                            <div className="post-meta">
                                <span>❤️ {post.likes}</span>
                                <span>💬 {post.comments}</span>
                            </div>
                            <div className="post-info">
                                작성일 : {post.date} | 작성자 : {post.user}
                            </div>
                        </Link>
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

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "./RegionalBoard.css";
// import apiClient from "../../../api/apiClient";

// const RegionalBoard = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // 지역 및 검색 상태
//     const [activeRegion, setActiveRegion] = useState("전체");
//     const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

//     // 게시글 데이터
//     const [posts, setPosts] = useState([]);
//     const [filteredPosts, setFilteredPosts] = useState([]);

//     // 서버에서 게시글 가져오기
//     const fetchPosts = async (region) => {
//         try {
//             const endpoint = region === "전체" ? "/region/posts" : `/region/${region}`;
//             const response = await apiClient.get(endpoint);
//             console.log(response);
//             setPosts(response.data); // 서버에서 받아온 게시글 데이터 설정
//         } catch (error) {
//             console.error(`Error fetching posts for region ${region}:`, error);
//             setPosts([]); // 에러 시 빈 배열로 설정
//         }
//     };

//     // 페이지가 로드될 때 전체 게시글 데이터를 가져옴
//     useEffect(() => {
//         fetchPosts("전체"); // 초기에는 전체 게시글을 가져옴
//     }, []);

//     // 지역 또는 검색어가 변경될 때 게시글 필터링
//     useEffect(() => {
//         const searchFilteredPosts = posts.filter((post) =>
//             post.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredPosts(searchFilteredPosts);
//     }, [searchTerm, posts]); 

//     // 검색어 또는 지역이 변경될 때 게시글 필터링
//     // useEffect(() => {
//     //     const regionFilteredPosts =
//     //         activeRegion === "전체"
//     //             ? initialPosts
//     //             : initialPosts.filter((post) => post.region === activeRegion);

//     //     const searchFilteredPosts = regionFilteredPosts.filter((post) =>
//     //         post.title.toLowerCase().includes(searchTerm.toLowerCase())
//     //     );

//     //     setFilteredPosts(searchFilteredPosts);
//     // }, [activeRegion, searchTerm]); // activeRegion 또는 searchTerm 변경 시 실행

//     // 지역 버튼 클릭 핸들러
//     const handleRegionClick = (region) => {
//         setActiveRegion(region);
//         fetchPosts(region);
//     };

//     // 글 작성하기 버튼 클릭 핸들러
//     const handleCreatePostClick = () => {
//         navigate("/board/write", {
//             state: {
//                 category: "지역별 게시판",
//                 subcategory: activeRegion !== "전체" ? activeRegion : null, // 선택된 지역만 전달
//             },
//         });
//     };

//     return (
//         <div className="general-board-container">
//             {/* 버튼과 검색창을 포함하는 컨테이너 */}
//             <div className="action-wrapper">
//                 <div className="button-wrapper">
//                     <Link
//                         to="/board/regional"
//                         className={`board-button ${location.pathname === "/board/regional" ? "active" : ""}`}
//                     >
//                         지역별 게시판
//                     </Link>
//                     <Link
//                         to="/board/general"
//                         className={`board-button ${location.pathname === "/board/general" ? "active" : ""}`}
//                     >
//                         자유게시판
//                     </Link>
//                     <Link
//                         to="/board/q-a"
//                         className={`board-button ${location.pathname === "/board/q-a" ? "active" : ""}`}
//                     >
//                         QnA
//                     </Link>
//                 </div>
//                 <div className="searchBar">
//                     <input
//                         type="text"
//                         className="search-bar"
//                         placeholder="검색어를 입력하세요"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* 지역 버튼 영역 */}
//             <div className="region-wrapper">
//                 {["전체", "경기도", "강원도", "충청북도", "충청남도", "경상북도", "경상남도", "전라북도", "전라남도", "제주도"].map(
//                     (region) => (
//                         <button
//                             key={region}
//                             onClick={() => handleRegionClick(region)}
//                             className={`region-button ${activeRegion === region ? "active" : ""}`}
//                         >
//                             {region}
//                         </button>
//                     )
//                 )}
//             </div>

//             {/* 게시글 목록 */}
//             <div className="post-list">
//                 {filteredPosts.length > 0 ? (
//                     filteredPosts.map((post, index) => (
//                         <Link
//                             key={index}
//                             to="/board/detail"
//                             state={{ post }} // 게시글 데이터 전달
//                             className="post-item"
//                         >
//                             <h3 className="post-title">{post.title}</h3>
//                             <div className="post-meta">
//                                 <span>❤️ {post.likes}</span>
//                                 <span>💬 {post.comments}</span>
//                             </div>
//                             <div className="post-info">
//                                 작성일 : {post.date} | 작성자 : {post.user}
//                             </div>
//                         </Link>
//                     ))
//                 ) : (
//                     <div className="no-posts">선택한 지역에 게시물이 없습니다.</div>
//                 )}
//             </div>

//             {/* 푸터 영역 */}
//             <footer className="footer">
//                 <button className="create-post-button" onClick={handleCreatePostClick}>
//                     글 작성하기
//                 </button>
//             </footer>
//         </div>
//     );
// };

// export default RegionalBoard;
