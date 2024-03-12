import type { FC, ReactElement } from 'react';
import style from './header.module.scss';

export const Header: FC = (): ReactElement => {
  // process.env.lastModified 来自于 vite.config.ts
  const lastModified = process.env.lastModified;
  return (
    <div className={style.root}>
      <button className="generate-pdf btn print-hidden" onClick={generatePdf}>
        生成PDF
      </button>
      <p className="last-modified print-hidden">最后更新于 {lastModified}</p>
    </div>
  );

  function generatePdf() {
    window.print();
  }
};
