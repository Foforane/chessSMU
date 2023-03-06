import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@cloudscape-design/global-styles/index.css"
import {applyMode,Mode} from '@cloudscape-design/global-styles';
import {HashRouter} from 'react-router-dom'
applyMode(Mode.Dark);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<HashRouter>
  <App />
  </HashRouter>
 
)
