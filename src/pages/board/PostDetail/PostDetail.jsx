import React from 'react';
import { useLocation } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    const location = useLocation();
    const post = location.state?.post;

    if (!post) {
        return <div className="post-detail-container">게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="post-detail-container">
            {/* 게시글 제목 */}
            <h1 className="post-title">{post.title}</h1>

            {/* 게시글 내용 */}
            <p className="post-content">
                {post.content}
            </p>

            {/* 하단 정보 */}
            <div className="post-info">
                작성일: {post.date} | 작성자: {post.user}
            </div>

            {/* 하단 좋아요와 댓글 */}
            <footer className="post-footer">
                <div className="post-stats">
                    <span className="comments">💬 {post.comments}</span>
                    <span className="likes">❤️ {post.likes}</span>
                </div>
            </footer>
        </div>
    );
};

export default PostDetail;