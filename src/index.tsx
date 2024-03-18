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
document.title = `${data.info.name} - ${data.info.job}简历`;
root.render(
  <React.StrictMode>
    <DataContext.Provider value={data}>
      {import.meta.env.DEV ? (
        <DevSupport
          ComponentPreviews={ComponentPreviews}
          useInitialHook={useInitial}>
          <Layout />
        </DevSupport>
      ) : (
        <Layout />
      )}
    </DataContext.Provider>
  </React.StrictMode>,
);
