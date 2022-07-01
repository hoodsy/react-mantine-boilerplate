const global = (theme) => ({
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },

    body: {
        margin: 0,
        fontFamily: 'Nunito, sans-serif',
        background: theme.colors.gray[0],
        color: theme.colors.dark[7],
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    },

    'h1,h2,h3,h4,h5,h6': {
        color: `${theme.colors.dark[7]} !important`,
    },
});
export default global;
