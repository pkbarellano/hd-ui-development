import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import RouterComponent from './hoc/router/RouterComponent';
import AuthContextStore from './context/AuthContext';
import NavContextStore from './context/NavigationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <AuthContextStore>
    <NavContextStore>
      <RouterComponent />
    </NavContextStore>
  </AuthContextStore>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
