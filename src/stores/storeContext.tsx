import { createContext, useContext } from 'react';
import RootState from './RootStore';

export const StoreContext = createContext(RootState);

export const useStore = () => {
    const context = useContext(StoreContext);

    if (!context) throw new Error('error maybe you are forgot pass context');

    return context;
};
