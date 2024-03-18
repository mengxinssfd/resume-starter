import React from 'react';
import ReactDOM from 'react-dom/client';
import 'resetcss';
import './index.scss';
import { DataContext } from '@/context';
import data from '@/data';
import Layout from './Layout';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '@/dev';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
console.log('dev');
root.render(
  <React.StrictMode>
    <DataContext.Provider value={data}>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}>
        <Layout />
      </DevSupport>
    </DataContext.Provider>
  </React.StrictMode>,
);
