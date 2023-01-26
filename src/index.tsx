import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ApplicationProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApplicationProvider>
                <App />
            </ApplicationProvider>
        </BrowserRouter>
    </React.StrictMode>
);
