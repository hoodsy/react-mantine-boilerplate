import React from 'react';
import { createStyles, Button } from '@mantine/core';

import { useUser } from '../contexts/user';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white',
        padding: theme.spacing.lg,
    },
}));

const Navbar = () => {
    const { classes } = useStyles();
    const { user, logout } = useUser();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <nav className={classes.container}>
            {user?.email}
            <Button onClick={handleLogout}>Logout</Button>
        </nav>
    );
};
export default Navbar;
