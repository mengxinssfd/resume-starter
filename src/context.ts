import { createContext } from 'react';
import data from './data';
import { presetSettings } from '@/settings.preset';
import type { Settings } from '@/interfaces';

export const DataContext = createContext(data);
export const SettingContext = createContext<Settings>(presetSettings);
