import React, { useContext, useState, useEffect } from 'react';

import { axios } from '../util';

const initialState = {
    user: {},
};

export const UserContext = React.createContext({ ...initialState });

export const useUser = () => useContext(UserContext);

export const UserProvider = (props) => {
    const [userLoading, setUserLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const login = async ({ email, password }) => {
        try {
            const { data } = await axios.post('/user/login', {
                email,
                password,
            });
            setUser(data);
            setIsAuthenticated(true);
            setUserLoading(false);
        } catch (error) {
            console.error(error.message);
            return error;
        }
    };

    const logout = async () => {
        await axios.get('/user/logout');
        setUser({});
        setIsAuthenticated(false);
    };

    const getUser = async () => {
        const { data } = await axios.get('/user');

        if (data) {
            setUser(data);
            setIsAuthenticated(true);
        }

        setUserLoading(false);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider
            value={{
                ...initialState,
                user,
                isAuthenticated,
                userLoading,
                login,
                logout,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
