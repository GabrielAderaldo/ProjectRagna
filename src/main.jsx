import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.jsx'
import { ConfigProvider } from 'antd'
import './main.style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{ cssVar: true }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
