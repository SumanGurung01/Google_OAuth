import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

const CLIENT_ID = "795467005545-rg498iod71rhmht68dmr5s85m1aoad64.apps.googleusercontent.com"
root.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>

);
