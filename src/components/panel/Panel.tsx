import style from './panel.module.scss';
import React from 'react';
import { getClassNames } from '@tool-pack/basic';
export const Panel: React.FC<
  React.PropsWithChildren<{ title: React.ReactNode; className?: string }>
> = ({ title, children, className }): React.ReactElement => {
  return (
    <section className={getClassNames(style.root, className)}>
      <div className="panel-header">
        <h2 className="panel-title">
          <a
            className="anchor"
            href={'/#' + title}
            id={(title || '').toString()}>
            {title}
          </a>
        </h2>
      </div>
      <div className="panel-body">{children}</div>
    </section>
  );
};
