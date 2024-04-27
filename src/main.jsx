import React from 'react'

import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import store from './store';
import routes from './routes'

function App() {
    return <ReduxProvider store={store}>
        <ChakraProvider>
            <RouterProvider router={routes} />
        </ChakraProvider>
    </ReduxProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
