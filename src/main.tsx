import React from 'react'
import ReactDOM from 'react-dom/client'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { DatabaseProvider } from './lib/DatabaseProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
      <DatabaseProvider>
        <App />
      </DatabaseProvider>
    </TamaguiProvider>
  </React.StrictMode>,
)
