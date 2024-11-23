import React, { useEffect } from 'react';
import apiClient from '../../api/apiClient';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const KaKaoRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const code = new URL(window.location.href).searchParams.get("code");
    
    useEffect(() => {
        const handleKakaoLogin = async () => {
            try {
                console.log("Code from Kakao Redirect URL:", code);
                // const response = await apiClient.get(`/callback?code=${code}`)
                const response = await axios.get(`http://43.202.0.199:8080/callback?code=${code}`);
                console.log('로그인 성공:', response);
                
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