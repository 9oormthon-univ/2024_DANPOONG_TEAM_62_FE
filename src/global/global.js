import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyle = createGlobalStyle`

    ${reset}
    
    /* 웹 폰트 적용 */
    @font-face { //Medium
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {//Bold
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {//Extrabold
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
    }

    * {
        font-family: 'Pretendard';
        box-sizing: border-box;
        text-decoration: none;
        color: rgba(0,0,0,1);
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
`

export default GlobalStyle;
