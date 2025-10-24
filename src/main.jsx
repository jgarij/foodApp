import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {Provider} from "react-redux";
import {store} from "./Redux/store";
import {GoogleOAuthProvider} from  "@react-oauth/google";

createRoot(document.getElementById('root')).render(
 <GoogleOAuthProvider clientId = "31918971297-u2b2abt6uvg9fdobnkiicpvl0vd8n1dr.apps.googleusercontent.com">
    <Provider store={store}>
    <App />
  </Provider>
  </GoogleOAuthProvider>
 
)
