import React from 'react';
import { Outlet } from 'react-router-dom';

const Board = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Board;