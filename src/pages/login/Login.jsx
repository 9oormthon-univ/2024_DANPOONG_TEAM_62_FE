import React from 'react';
import S from './style';

const Login = () => {
    const REST_API_KEY = "d09dae9ffe4485ad461dc7f5c1e3e036";
    const REDIRECT_URI = 'http://localhost:3003/oauth/kakao/callback';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const loginHandler = () => {
    window.location.href = link; // 카카오 로그인 페이지로 사용자를 리디렉션시킨다.
    };
   
    return (
        <>
            <S.Background>
                <S.LoginComponent>
                    <div>로그인</div>
                    <div></div>
                    <div>단 한 번의 클릭으로 쉽고 빠르게,</div>
                    <div>새싹 여름지기로서 농업의 새로운 가능성을 함께 열어가세요!</div>
                    <S.kakaoLoginButton onClick={loginHandler}>
                        <img src={process.env.PUBLIC_URL + '/global/images/login/kakaoLoginButton.png'}/>
                    </S.kakaoLoginButton>
                </S.LoginComponent>
            </S.Background>
        </>
    );
};

export default Login;