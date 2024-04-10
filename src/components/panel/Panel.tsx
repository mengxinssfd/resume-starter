import style from './panel.module.scss';
import type { FC, PropsWithChildren, ReactNode, ReactElement } from 'react';
import { getClassNames } from '@tool-pack/basic';
export const Panel: FC<
  PropsWithChildren<{ title: ReactNode; className?: string }>
> = ({ title, children, className }): ReactElement => {
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
