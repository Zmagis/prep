//Connect Spring Boot with React
//https://www.youtube.com/watch?v=7XxH-G9ckeU
//WebRTC
//https://www.youtube.com/watch?v=DvlyzDZDEq4&list=PLWq6Fr9n_8B-ukzKS3Q_lEbm2j-3R7ccU&index=5&t=0s
//https://www.youtube.com/watch?v=BpN6ZwFjbCY&t=67s
//https://www.youtube.com/watch?v=R1sfHPwEH7A
//Video
//https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
//https://blog.logrocket.com/responsive-camera-component-react-hooks/
//Spring Boot Chat App
//https://www.youtube.com/watch?v=-ao3pX-UhQc

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AuthProvider } from './store/AuthContext';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
