import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import theme from './styles/theme';

const App = () => {
    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </MantineProvider>
    );
};

export default App;
