import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '@/dev';
import data from '@/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
console.log('dev');
root.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}>
      <Layout data={data} />
    </DevSupport>
  </React.StrictMode>,
);
