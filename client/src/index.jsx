import React from 'react';
import { createRoot } from 'react-dom/client';
import { configure } from 'mobx';
import './index.css';
import App from './App';

// Configure MobX strict mode
configure({
  enforceActions: "always",
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
