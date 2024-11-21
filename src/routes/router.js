import { createBrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import Board from "../pages/board/Board";
import PageNotFound from "../pages/error/PageNotFound";
import KaKaoRedirect from "../pages/login/KaKaoRedirect";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import ServiceInfo from "../pages/serviceInfo/ServiceInfo";
import { isAuthenticated } from "./auth";
import Info from "../pages/Information/Info";
import Education from "../pages/Information/Education/Education";
import Policy from "../pages/Information/Policy/Policy";
import Gemini from "../pages/Information/geminiApi/Gemini";
import GeneralBoard from "../pages/board/GeneralBoard/GeneralBoard";
import RegionalBoard from "../pages/board/RegionalBoard/RegionalBoard";
import QA from "../pages/board/QA/QA";

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
                element: <Board/>,
                children:[
                    {
                        path: "/board/general",
                        element: <GeneralBoard/>,
                    },
                    {
                        path: "/board/regional",
                        element: <RegionalBoard/>,
                    },
                    {
                        path: "/board/q-a",
                        element: <QA/>,
                    },
                ]
            },
            {
                path: "/info",
                element: <Info/>,
                children:[
                    {
                        path: "/info/edu",
                        element: <Education/>,
                    },
                    {
                        path: "/info/policy",
                        element: <Policy/>,
                    },
                    {
                        path: "/info/chat",
                        element: <Gemini/>,
                    },
                ]
            },
          
            {
                path: "*",
                element: <PageNotFound/>,
            },
        ]
    }

])

export default router;