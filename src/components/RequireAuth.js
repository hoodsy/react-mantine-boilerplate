import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useUser } from '../contexts/user';

const RequireAuth = ({ children }) => {
    const { isAuthenticated, userLoading } = useUser();
    const location = useLocation();

    if (userLoading) {
        return (
            <Navigate
                to="/loading"
                replace
                state={{ path: location.pathname }}
            />
        );
    }

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
};

export default RequireAuth;
