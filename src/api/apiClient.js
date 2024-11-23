import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://43.201.250.46:8080', // 서버 주소
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터: 모든 요청에 accessToken 추가
apiClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터: 401 에러 처리
apiClient.interceptors.response.use(
    (response) => response, // 정상 응답은 그대로 반환
    async (error) => {
        if (error.response?.status === 401) {
            console.error('Access token expired or invalid. Redirecting to login.');

            // 로그아웃 처리
            localStorage.removeItem('accessToken'); // 기존 만료된 accessToken 제거

            // 로그인 페이지로 리다이렉트
            alert('세션이 만료되었습니다. 다시 로그인해주세요.');
            window.location.href = '/oauth'; // 로그인 페이지 경로로 이동
        }

        return Promise.reject(error); // 다른 에러는 그대로 반환
    }
);

export default apiClient;
