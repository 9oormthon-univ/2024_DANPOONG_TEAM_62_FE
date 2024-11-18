import { createBrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import Board from "../pages/board/Board";
import PageNotFound from "../pages/error/PageNotFound";
import Gemini from "../pages/geminiApi/Gemini";
import KaKaoRedirect from "../pages/login/KaKaoRedirect";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import ServiceInfo from "../pages/serviceInfo/ServiceInfo";
import { isAuthenticated } from "./auth";

//추후에 로그인 하지 않으면 접근 할 수 없게 추가할 것 (글 작성, 댓글 작성 등)
// const ProtectedRoute = ({ element }) => {
//     return isAuthenticated() ? element : <Navigate to="/ouath" />;
// };

const router = createBrowserRouter([
    {
        path: "/",
        element:<Header/>,
        children:[
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/oauth",
                element: <Login/>,
                children:[
                    {
                        path: "/oauth/kakao/callback",
                        element: <KaKaoRedirect/>,
                    },
                ]
            },
            {
                path: "/serviceInfo",
                element: <ServiceInfo/>
            },
            {
                path: "/board",
                element: <Board/>
            },
            {
                path: "/chat",
                element: <Gemini/>
            },
            {
                path: "*",
                element: <PageNotFound/>,
            },
        ]
    }

])

export default router;