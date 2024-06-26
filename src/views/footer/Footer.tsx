import React from 'react';
import style from './footer.module.scss';
import { getClassNames } from '@tool-pack/basic';

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className={getClassNames('print-hidden', style.root)}>
      <a
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/mengxinssfd/resume-starter">
        Host On Github
      </a>
    </footer>
  );
};
