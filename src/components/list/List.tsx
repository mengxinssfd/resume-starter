import style from './list.module.scss';
import React from 'react';
import { createElement } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { MarkdownViewer } from '@/components';

export const List: React.FC<
  React.PropsWithChildren<{
    tag?: keyof HTMLElementTagNameMap;
    className?: string;
    list: string[];
  }>
> = ({ tag = 'ul', className, list }): React.ReactElement => {
  return createElement(
    tag!,
    {
      className: getClassNames(style.root, className) || undefined,
    },
    list.map((item) => <MarkdownViewer key={item} tag="li" content={item} />),
  );
};
