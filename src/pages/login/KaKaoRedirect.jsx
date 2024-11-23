import React, { useEffect } from 'react';
import apiClient from '../../api/apiClient';
import { useLocation, useNavigate } from 'react-router-dom';

const KaKaoRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    console.log("Extracted Code:", code);
    useEffect(() => {
        const handleKakaoLogin = async () => {
            try {
                console.log("Code from Kakao Redirect URL:", code);
                const response = await apiClient.get(`/callback?code=${code}`)
    
                console.log('로그인 성공:', response.data);
                
            } catch (error) {
                console.log(error);
            }
        };
        
        if (code) {
            handleKakaoLogin(); // 로그인 로직 실행
        }
    },[code,navigate]);

    return (
        <div>
            로그인 후 리다이렉트 페이지
        </div>
    );
};

export default KaKaoRedirect;