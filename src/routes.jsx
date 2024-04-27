import { createBrowserRouter } from 'react-router-dom';

import config from './assets/config.jsonc';
import Dashboard from './pages/Dashboard'
import FileSystemNavigator from "./containers/FileSystemNavigator";
import { useSelector } from 'react-redux';

const routes = [
    {
        id: "root",
        path: "/",
        element: <Dashboard />,
        errorElement: <></>,
        loader: () => ({ config }),
        children: [
            {
                id: "home",
                path: 'home',
                element: <FileSystemNavigator navigation={'home'} />,
                errorElement: <></>,
            },
            {
                id: "documents",
                path: 'documents',
                element: <FileSystemNavigator navigation={'documents'} />,
                errorElement: <></>,
            },
            {
                id: "images",
                path: 'images',
                element: <FileSystemNavigator navigation={'images'} />,
                errorElement: <></>,
            },
            {
                id: "music",
                path: 'music',
                element: <FileSystemNavigator navigation={'music'} />,
                errorElement: <></>,
            },
            {
                id: "work",
                path: 'work',
                element: <FileSystemNavigator navigation={'work'} />,
                errorElement: <></>,
            },
        ]
    }
];

const BrowserRouter = createBrowserRouter(routes);

export default BrowserRouter;
