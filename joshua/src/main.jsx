import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Additional global styles */
  .main-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section {
    margin-bottom: 20px;
  }

  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    max-width: 100%;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .text-center {
    text-align: center;
  }

  @media (max-width: 768px) {
    .main-container {
      padding: 0 20px;
    }
  }
`;

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
