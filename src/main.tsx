import { spy } from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import RootState from './stores/RootStore.ts';
import { StoreContext } from './stores/storeContext.tsx';

spy((ev) => {
    if (ev.type === 'action') {
        console.log(ev);
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreContext.Provider value={RootState}>
            <App />
        </StoreContext.Provider>
    </React.StrictMode>
);
