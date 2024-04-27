import { configureStore, combineReducers } from "@reduxjs/toolkit";

import * as containersFileSystemNavigator from "./containers/fileSystemNavigator.js";
import * as pagesDashboard from "./pages/dashboard.js";

const store = configureStore({
    reducer: combineReducers({
        [containersFileSystemNavigator.name]: containersFileSystemNavigator.reducer,
        [pagesDashboard.name]: pagesDashboard.reducer,
    })
});

export default store;