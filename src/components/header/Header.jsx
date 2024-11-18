import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import S from './style';

const Header = () => {
    
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <>
            <S.HeaderContainer
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                isHovered={isHovered}
            >
            <S.Logo src={process.env.PUBLIC_URL + '/global/images/logo/logo.png'} alt="로고" />
            <S.Nav>
                <S.NavItem>
                    서비스 소개
                </S.NavItem>
                <S.NavItem>
                 게시판
                    <S.SubMenu className="submenu">
                        <div>전체 게시판</div>
                        <div>지역별 게시판</div>
                        <div>큐엔에이</div>
                    </S.SubMenu>
                </S.NavItem>
                <S.NavItem>
                    농업 소식통
                    <S.SubMenu className="submenu">
                        <div>지원 정책</div>
                        <div>교육</div>
                        <div>농업 관련 문답</div>
                    </S.SubMenu>
                </S.NavItem>
                <S.ProfileImage src={process.env.PUBLIC_URL + '/global/images/userProfile/profileImage.png'} alt="프로필 이미지" />
            </S.Nav>
            </S.HeaderContainer>
        <Outlet/>
    </>
    );
};

export default Header;