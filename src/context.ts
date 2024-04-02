import { createContext } from 'react';
import data from './data';
import { Settings } from '@/settings';

export const DataContext = createContext(data);
export const SettingContext = createContext(Settings);
