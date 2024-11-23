import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import S from './style';
import User from '../header-user/User';

const Header = () => {
    
    const [isdropdownopen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleMouseEnter = () => {
      setIsDropdownOpen(true);

    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);

    };
    
    const handleProfileClick = () => {
        const userId = localStorage.getItem('userId');
        // const accessToken = localStorage.getItem('accessToken'); // 로컬스토리지에서 액세스 토큰 확인
        // const userId=localStorage.removeItem('userId')
        if (!userId) {
            // 토큰이 없으면 알림을 띄우고 로그인 페이지로 이동
            alert('로그인이 필요합니다.');
            navigate('/oauth'); // 리다이렉트
        } else {
            // 토큰이 있을 경우 프로필 메뉴를 토글
            setIsVisible((prevState) => !prevState);
        }
    };

    useEffect(() => {
        setIsDropdownOpen(false);
        setIsVisible(false);
    }, [location]);

    return (
        <>
            
        <S.Background>
            <S.StyledHeader isdropdownopen={isdropdownopen} isvisible={isVisible} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavLink to="/">
                    <S.Logo src={process.env.PUBLIC_URL + '/global/images/logo/logo.png'} alt="로고" />
                </NavLink>
                <S.Nav>
                    <S.NavItem>
                        <NavLink to="/serviceInfo">서비스소개</NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <NavLink to="/board/general">게시판</NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <NavLink to="/info/chat">농업소식통</NavLink>
                    </S.NavItem>

                    <S.ProfileImage
                        src={process.env.PUBLIC_URL + '/global/images/userProfile/profileImage.png'}
                        alt="프로필 이미지"
                        onClick={handleProfileClick}
                    />
                    
                </S.Nav>

                {/* 드롭다운 메뉴 */}
             
                <S.DropdownContainer isdropdownopen={isdropdownopen}>
                    <S.Dropdown className='dropdown1'>
                        <NavLink to="/board/general" onClick={() => setIsDropdownOpen(false)}>자유게시판</NavLink>
                        <NavLink to="/board/regional" onClick={() => setIsDropdownOpen(false)}>지역별게시판</NavLink>
                        <NavLink to="/board/q-a" onClick={() => setIsDropdownOpen(false)}>Q&A</NavLink>
                    </S.Dropdown>

                    <S.Dropdown className='dropdown2'>
                        <NavLink to="/info/edu" onClick={() => setIsDropdownOpen(false)}>교육</NavLink>
                        <NavLink to="/info/policy" onClick={() => setIsDropdownOpen(false)}>지원사업</NavLink>
                        <NavLink to="/info/chat" onClick={() => setIsDropdownOpen(false)}>창업문답</NavLink>
                    </S.Dropdown>
                </S.DropdownContainer>
             
            </S.StyledHeader>
            {isVisible && <S.UserBackground>
                <User />
            </S.UserBackground>}
            
            <S.Layout>
                <Outlet/>
            </S.Layout>
        </S.Background>
        
    </>
    );
};

export default Header;