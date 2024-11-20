import React from 'react';
import S from './style';

const User = () => {
    return (
        <>
            <S.User>
                <img src={process.env.PUBLIC_URL + '/global/images/userProfile/profileImage.png'} alt="프로필 이미지"/>
                <div>이름</div>
            </S.User>
            <S.Kakao>
                <S.LogoutButton>로그아웃</S.LogoutButton>
                <S.WithdrawalButton>회원탈퇴</S.WithdrawalButton>
            </S.Kakao>
        </>
    );
};

export default User;