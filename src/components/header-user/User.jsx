import React from 'react';
import S from './style';
import apiClient from '../../api/apiClient'; // API 클라이언트 가져오기
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();

    // 로그아웃 요청
    const handleLogout = async () => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            
            const response=await apiClient.post('/logout', { accessToken });
            console.log(response);
            localStorage.removeItem('accessToken'); 
            alert("로그아웃 되었습니다.");
            navigate('/'); // 메인 페이지로 이동
        } catch (error) {
            console.error("로그아웃 중 에러 발생:", error);
            alert("로그아웃에 실패했습니다.");
        }
    };

    // 회원탈퇴 요청
    const handleWithdrawal = async () => {
        const accessToken = localStorage.getItem('accessToken'); 

        const confirmWithdrawal = window.confirm("정말로 회원탈퇴 하시겠습니까?");
        if (!confirmWithdrawal) {
            return; // 확인 취소 시 종료
        }

        try {
            // 서버로 회원탈퇴 요청 (body에 토큰 포함)
            const response= await apiClient.post('/deleteAccount', { accessToken });
            console.log(response);
            localStorage.removeItem('accessToken'); // 토큰 삭제
            alert("회원탈퇴가 완료되었습니다.");
            navigate('/'); // 메인 페이지로 이동
        } catch (error) {
            console.error("회원탈퇴 중 에러 발생:", error);
            alert("회원탈퇴에 실패했습니다.");
        }
    };

    return (
        <>
            <S.User>
                <img src={process.env.PUBLIC_URL + '/global/images/userProfile/profileImage.png'} alt="프로필 이미지" />
                <div>이름</div>
            </S.User>
            <S.Kakao>
                <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
                <S.WithdrawalButton onClick={handleWithdrawal}>회원탈퇴</S.WithdrawalButton>
            </S.Kakao>
        </>
    );
};

export default User;
