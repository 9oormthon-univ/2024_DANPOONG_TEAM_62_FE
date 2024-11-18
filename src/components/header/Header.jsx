import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            헤더
            <Outlet/>
        </div>
    );
};

export default Header;