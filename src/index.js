import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* 
configaration
REACT_APP_apiKey = AIzaSyDMCrHcaj73DWD_1J34jsC5kNGmI-5jYLs
REACT_APP_authDomain = doctors-portal-75603.firebaseapp.com
REACT_APP_project_Id = doctors-portal-75603
REACT_APP_storage_Bucket = doctors-portal-75603.appspot.com
REACT_APP_messaging_SenderId = 711264400685
REACT_APP_appId = 1:711264400685:web:ddbd1243692968839f0fa 
*/