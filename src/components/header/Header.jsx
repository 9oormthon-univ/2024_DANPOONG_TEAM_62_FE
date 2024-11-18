import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import S from './style';

const Header = () => {
    
    const [isdropdownopen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    const handleMouseEnter = () => {
      setIsDropdownOpen(true);

    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);

    };
  
    // 경로가 변경될 때 헤더 크기를 리셋 (무슨짓을해도 안됨 ㅠㅠ)
    useEffect(() => {
        setIsDropdownOpen(false);
    }, [location]);

    return (
        <>
            
        <S.Background>
            <S.StyledHeader isdropdownopen={isdropdownopen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
            <S.Layout>
                <Outlet/>
            </S.Layout>
        </S.Background>
        
    </>
    );
};

export default Header;