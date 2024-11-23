import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
    const location = useLocation();
    const post = location.state?.post;

    const [comments, setComments] = useState([]); // 댓글 상태
    const [commentInput, setCommentInput] = useState(""); // 댓글 입력 상태
    const [likes, setLikes] = useState(post.likes || 0); // 좋아요 상태

    if (!post) {
        return <div className="post-detail-container">게시글을 찾을 수 없습니다.</div>;
    }

    // 댓글 추가 핸들러
    const handleAddComment = () => {
        if (commentInput.trim() === "") return; // 빈 댓글 방지

        const newComment = {
            id: Date.now(),
            text: commentInput,
            user: "현재 사용자", // 로그인된 사용자 정보
            date: new Date().toLocaleString(),
        };

        setComments((prevComments) => [...prevComments, newComment]); // 댓글 추가
        setCommentInput(""); // 입력 필드 초기화
    };

    // 좋아요 버튼 클릭 핸들러
    const handleLikeClick = () => {
        setLikes((prevLikes) => prevLikes + 1); // 좋아요 수 증가
    };

    return (
        <div>
            {/* 게시글 섹션 */}
            <div className="post-detail-container">
                <PostContent
                    post={post}
                    likes={likes}
                    commentsCount={comments.length}
                    handleLikeClick={handleLikeClick}
                />
            </div>

            {/* 댓글 섹션 */}
            <div className="comment-section-container">
                <CommentSection
                    comments={comments}
                    commentInput={commentInput}
                    setCommentInput={setCommentInput}
                    handleAddComment={handleAddComment}
                />
            </div>
        </div>
    );
};

// 게시글 정보를 보여주는 섹션
const PostContent = ({ post, likes, commentsCount, handleLikeClick }) => {
    return (
        <div className="post-content-container">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-content">{post.content}</p>
            <footer className="post-footer">
                <div className="post-meta">
                    <span className="post-author">작성자: {post.user}</span>
                    <span className="post-date">작성일: {post.date}</span>
                </div>
                <div className="post-stats">
                    <button className="likes-button" onClick={handleLikeClick}>
                        ❤️ {likes}
                    </button>
                    <span className="comments-count">💬 {commentsCount} 댓글</span>
                </div>
            </footer>
        </div>
    );
};

// 댓글 관리를 위한 섹션
const CommentSection = ({ comments, commentInput, setCommentInput, handleAddComment }) => {
    return (
        <div className="comment-section">
            <h2>댓글</h2>
            <ul className="comment-list">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <li key={comment.id} className="comment-item">
                            <strong>{comment.user}</strong>
                            <p>{comment.text}</p>
                            <small>{comment.date}</small>
                        </li>
                    ))
                ) : (
                    <li className="no-comments">댓글이 없습니다.</li>
                )}
            </ul>
            <div className="comment-input-wrapper">
                <textarea
                    className="comment-input"
                    placeholder="댓글을 입력해주세요."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    maxLength={300}
                />
                <button className="add-comment-button" onClick={handleAddComment}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default PostDetail;

// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import "./PostDetail.css";
// import apiClient from "../../../api/apiClient";

// const PostDetail = () => {
//     const location = useLocation();
//     const [post, setPost] = useState(null);
//     const { id } = useParams(); // URL에서 게시물 ID 추출
//     const [comments, setComments] = useState([]); // 댓글 상태
//     const [commentInput, setCommentInput] = useState(""); // 댓글 입력 상태
//     const [likes, setLikes] = useState(post.likes || 0); // 좋아요 상태


//     // 게시물 상세 조회
//     useEffect(() => {
//         const fetchPostDetails = async () => {
//             try {
//                 const response = await apiClient.get(`/post/${id}`);
//                 const postData = response.data;
//                 setPost(postData);
//                 setLikes(postData.likes); // 좋아요 수 초기화
//             } catch (error) {
//                 console.error("Error fetching post details:", error);
//             }
//         };

//         fetchPostDetails();
//     }, [id]);

//     // 댓글 추가 핸들러
//    const handleAddComment = async () => {
//         if (commentInput.trim() === "") return; // 빈 댓글 방지

//         const newComment = {
//             content: commentInput,
//             userId: 1, // 현재는 임시로 userId 1로 설정
//             postId: id,
//         };

//         try {
//             const response = await apiClient.post("/comment", newComment);
//             console.log("댓글 등록 성공:", response.data);

//             // 댓글 리스트에 새 댓글 추가
//             setComments((prevComments) => [
//                 ...prevComments,
//                 {
//                     id: response.data.id, // 서버가 반환하는 댓글 ID
//                     text: newComment.content,
//                     user: "현재 사용자", // 임시 사용자 이름
//                     date: new Date().toLocaleString(),
//                 },
//             ]);

//             setCommentInput(""); // 입력 필드 초기화
//         } catch (error) {
//             console.error("Error adding comment:", error);
//             alert("댓글 등록에 실패했습니다.");
//         }
//     };

//     // 좋아요 버튼 클릭 핸들러
//     const handleLikeClick = () => {
//         setLikes((prevLikes) => prevLikes + 1); // 좋아요 수 증가
//     };
//     if (!post) {
//         return <div className="post-detail-container">게시글을 찾을 수 없습니다.</div>;
//     }

//     return (
//         <div>
//             {/* 게시글 섹션 */}
//             <div className="post-detail-container">
//                 <PostContent
//                     post={post}
//                     likes={likes}
//                     commentsCount={comments.length}
//                     handleLikeClick={handleLikeClick}
//                 />
//             </div>

//             {/* 댓글 섹션 */}
//             <div className="comment-section-container">
//                 <CommentSection
//                     comments={comments}
//                     commentInput={commentInput}
//                     setCommentInput={setCommentInput}
//                     handleAddComment={handleAddComment}
//                 />
//             </div>
//         </div>
//     );
// };

// // 게시글 정보를 보여주는 섹션
// const PostContent = ({ post, likes, commentsCount, handleLikeClick }) => {
//     return (
//         <div className="post-content-container">
//             <h1 className="post-title">{post.title}</h1>
//             <p className="post-content">{post.content}</p>
//             <footer className="post-footer">
//                 <div className="post-meta">
//                     <span className="post-author">작성자: {post.user}</span>
//                     <span className="post-date">작성일: {post.date}</span>
//                 </div>
//                 <div className="post-stats">
//                     <button className="likes-button" onClick={handleLikeClick}>
//                         ❤️ {likes}
//                     </button>
//                     <span className="comments-count">💬 {commentsCount} 댓글</span>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// // 댓글 관리를 위한 섹션
// const CommentSection = ({ comments, commentInput, setCommentInput, handleAddComment }) => {
//     return (
//         <div className="comment-section">
//             <h2>댓글</h2>
//             <ul className="comment-list">
//                 {comments.length > 0 ? (
//                     comments.map((comment) => (
//                         <li key={comment.id} className="comment-item">
//                             <strong>{comment.user}</strong>
//                             <p>{comment.text}</p>
//                             <small>{comment.date}</small>
//                         </li>
//                     ))
//                 ) : (
//                     <li className="no-comments">댓글이 없습니다.</li>
//                 )}
//             </ul>
//             <div className="comment-input-wrapper">
//                 <textarea
//                     className="comment-input"
//                     placeholder="댓글을 입력해주세요."
//                     value={commentInput}
//                     onChange={(e) => setCommentInput(e.target.value)}
//                     maxLength={300}
//                 />
//                 <button className="add-comment-button" onClick={handleAddComment}>
//                     등록
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PostDetail;