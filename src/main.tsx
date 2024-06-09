import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
      <Button colorScheme='purple' variant='outline'>Button</Button>
    </ChakraProvider>
  </React.StrictMode>,
)
