import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root') as HTMLElement; // Assert that root is an HTMLElement
ReactDOM.createRoot(root).render(<App />);
