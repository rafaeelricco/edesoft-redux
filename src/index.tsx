import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import usersReducer from './store/users'

const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
)
