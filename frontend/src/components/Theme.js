import React from 'react';
import {ThemeProvider} from 'styled-components';

const Theme = ( { children } ) => {
    const theme = {
        color: {
            main: '#FDFAF7',
            bg: '#e7e7e1',
            color1: '#7fb6a2',
            color2: '#008b70',
            color2Dark: '#003F24',
            color3: '#c7604a',
            color3Dark: '#942D17',
            color4: '#8a6846',
            color5: '#e3c802',
            color6: '#6599cc'
        },
        font: {
            primary: "'Montserrat', sans-serif",
            secondary: " 'Neuton', serif"
        },
        device: {
            lgPhone: '(min-width: 426px)',
            tablet: '(min-width: 769px)',
            laptop: '(min-width: 1025px)',
            desktop: '(min-width: 1200px)'
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;

