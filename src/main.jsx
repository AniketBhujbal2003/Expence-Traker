import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ETProvider } from './Context/TransactionCont.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ETProvider>
          <App />
      </ETProvider>
  </React.StrictMode>,
)
