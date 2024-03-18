import type { FC, ReactElement } from 'react';
import style from './header.module.scss';

export const Header: FC = (): ReactElement => {
  // import.meta.env.APP_LAST_MODIFIED 来自于 vite.config.ts
  const lastModified = import.meta.env.APP_LAST_MODIFIED;
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
