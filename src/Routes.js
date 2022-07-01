import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import Landing from './pages/Landing';
import Loading from './pages/Loading';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/dashboard"
                element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }
            />
        </Routes>
    );
};

export default RoutesComponent;
