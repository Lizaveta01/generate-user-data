import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </ThemeProvider>
        </>
    );
};

export default App;
