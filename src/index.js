import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import "./theme.scss"
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store";
import ErrorBoundary from "./ErrorBoundary";


ReactDOM.render(
    <ErrorBoundary>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </ErrorBoundary>,
    document.getElementById('root')
);
