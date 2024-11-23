
import React, { createContext, useContext, useEffect, useState } from 'react';
import apiClient from '../api/apiClient';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // 유저 정보 상태
    const accessToken = localStorage.getItem('accessToken'); 

    
        const fetchUserInfo = async () => {
            try {
                
                const response = await apiClient.post(
                    '/token/user',
                    {accessToken:accessToken},
                    
                );
                console.log(response.data);
                const userData = response.data.data;
                setUser({
                    userId:userData.userId,
                    profileImageUrl: userData.profileImageUrl,
                    name: userData.name,
                });

            } catch (err) {
                console.error("Error fetching user info:", err);
            }
        };

        useEffect(() => {
            if (accessToken) {
                fetchUserInfo();
            }
        }, []);  

    


    return (
        <UserContext.Provider value={{ user, setUser,fetchUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);