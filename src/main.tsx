import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Button, ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <Button colorScheme='purple' variant='outline'>Button</Button>
    </ChakraProvider>
  </React.StrictMode>,
)
