import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import "./css/index.css";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
