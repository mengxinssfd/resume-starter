import React from 'react';
import ReactDOM from 'react-dom/client';
import 'resetcss';
import './index.scss';
import { DataContext } from '@/context';
import data from '@/data';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
document.title = `${data.info.name} - ${data.info.job}简历`;
root.render(
  <React.StrictMode>
    <DataContext.Provider value={data}>
      <App />
    </DataContext.Provider>
  </React.StrictMode>,
);
