import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import data from '@/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Layout data={data} />
  </React.StrictMode>,
);
