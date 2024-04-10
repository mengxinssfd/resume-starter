import type { FC, ReactElement } from 'react';
import style from './footer.module.scss';
import { getClassNames } from '@tool-pack/basic';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={getClassNames('print-hidden', style.root)}>
      <a
        className="footer-link"
        target="_blank"
        href="https://github.com/mengxinssfd/resume-starter">
        Host On Github
      </a>
    </footer>
  );
};
