import React from 'react';
import { createStyles } from '@mantine/core';

import Navbar from '../../components/Navbar';

const useStyles = createStyles((theme) => ({
    container: {},
}));

const Dashboard = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.container}>
            <Navbar />
        </div>
    );
};

export default Dashboard;
