import { createBrowserRouter } from 'react-router-dom';

import config from '@app/assets/config.jsonc';
import withDynamicImport from '@app/hocs/withDynamicImport';

const routes = [
    {
        id: "root",
        path: "/",
        element: withDynamicImport('Dashboard').pages(),
        errorElement: <></>,
        loader: () => ({ config }),
        children: [
            {
                id: "home",
                path: 'home',
                element: withDynamicImport('FileSystemNavigator').containers({ navigation: 'home' }),
                errorElement: <></>,
            },
            {
                id: "documents",
                path: 'documents',
                element: withDynamicImport('FileSystemNavigator').containers({ navigation: 'documents' }),
                errorElement: <></>,
            },
            {
                id: "images",
                path: 'images',
                element: withDynamicImport('FileSystemNavigator').containers({ navigation: 'images' }),
                errorElement: <></>,
            },
            {
                id: "music",
                path: 'music',
                element: withDynamicImport('FileSystemNavigator').containers({ navigation: 'music' }),
                errorElement: <></>,
            },
            {
                id: "work",
                path: 'work',
                element: withDynamicImport('FileSystemNavigator').containers({ navigation: 'work' }),
                errorElement: <></>,
            },
        ]
    }
];

const BrowserRouter = createBrowserRouter(routes);

export default BrowserRouter;
