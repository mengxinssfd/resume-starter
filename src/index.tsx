import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { DataContext } from '@/context';
import data from '@/data';
import Layout from './Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <DataContext.Provider value={data}>
      <Layout />
    </DataContext.Provider>
  </React.StrictMode>,
);
