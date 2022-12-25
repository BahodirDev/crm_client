import React from 'react';
import { Outlet } from 'react-router-dom';
import UserChatComponent from './chat/UserChatComponent';

function UserPublicChatRoute(props) {
    return (
        <>
            <UserChatComponent />
            <Outlet />
        </>
    );
}

export default UserPublicChatRoute;