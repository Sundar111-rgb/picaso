// Imports: Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
//import rootReducer from '../Reducers/employeeDetailReducer';
import rootReducer from '../Reducers/studentDetailsReducer';

// Middleware: Redux Persist Config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'employeeDetails',
        'employeeDetailsData',
        'studentDetails',
        'studentDetailsData'
    ],

    blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger(),
    ),
);
let persistor = persistStore(store);
export {
    store,
    persistor,
};