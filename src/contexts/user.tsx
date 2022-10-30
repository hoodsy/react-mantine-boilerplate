import React, { useContext, useState, useEffect, ReactNode } from 'react';

import { axios } from '../util';

export interface ILoginArgs {
    email: string;
    password: string;
}

interface IUserContext {
    user: { email?: string };
    isAuthenticated: boolean;
    userLoading: boolean;
    login: (arg0: ILoginArgs) => Promise<any>;
    logout: () => Promise<any>;
}

export const UserContext = React.createContext<IUserContext>(
    {} as IUserContext
);
export const useUser = () => useContext(UserContext);

interface IProps {
    children?: ReactNode;
}

export const UserProvider = ({ children }: IProps) => {
    const [userLoading, setUserLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const login = async ({ email, password }: ILoginArgs) => {
        try {
            const { data } = await axios.post('/user/login', {
                email,
                password,
            });
            setUser(data);
            setIsAuthenticated(true);
            setUserLoading(false);
        } catch (error: any) {
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
                user,
                isAuthenticated,
                userLoading,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
