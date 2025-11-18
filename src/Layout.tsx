import { Header, Footer, Body } from '@/views';
import { presetSettings } from '@/settings.preset';
import React from 'react';
import './index.scss';
import type { Data, Settings } from '@/interfaces';
import { DataContext, SettingContext } from './context';

export const Layout: React.FC<{ data: Data; settings?: Settings }> = ({
  data,
  settings,
}): React.ReactElement => {
  settings = Object.assign({}, presetSettings, settings);
  return (
    <SettingContext.Provider value={settings}>
      <DataContext.Provider value={data}>
        <Header />
        <Body />
        <Footer />
      </DataContext.Provider>
    </SettingContext.Provider>
  );
};
