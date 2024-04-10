import { createContext } from 'react';
import data from './data';
import { settings } from '@/settings';

export const DataContext = createContext(data);
export const SettingContext = createContext(settings);
