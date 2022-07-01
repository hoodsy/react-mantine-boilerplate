import { MantineProvider, Global } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import { UserProvider } from './contexts/user';
import theme from './styles/theme';
import global from './styles/global';

const App = () => {
    return (
        <MantineProvider theme={theme}>
            <Global styles={global} />
            <UserProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </UserProvider>
        </MantineProvider>
    );
};

export default App;
