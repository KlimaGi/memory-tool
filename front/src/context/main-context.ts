import { createContext } from 'react';
import { MainContextInterface } from '../types/main-types';

const MainContext = createContext<MainContextInterface | null>(null);

export default MainContext;
