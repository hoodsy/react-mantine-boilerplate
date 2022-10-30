import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStyles, Loader, Box } from '@mantine/core';

import { useUser } from '../contexts/user';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '256px',
    },
}));

const Loading = () => {
    const { classes } = useStyles();
    const { isAuthenticated, userLoading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userLoading) {
            if (isAuthenticated) {
                navigate('/dashboard');
            } else {
                navigate('/login');
            }
        }
    }, [userLoading, isAuthenticated, navigate]);

    return (
        <Box mx="auto" className={classes.container}>
            <Loader variant="dots" />
        </Box>
    );
};
export default Loading;
