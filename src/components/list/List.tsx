import style from './list.module.scss';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import { createElement } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { MarkdownViewer } from '@/components';

export const List: FC<
  PropsWithChildren<{
    tag?: keyof HTMLElementTagNameMap;
    className?: string;
    list: string[];
  }>
> = ({ tag, className, list }): ReactElement => {
  return createElement(
    tag!,
    {
      className: getClassNames(style.root, className) || undefined,
    },
    list.map((item) => <MarkdownViewer key={item} tag="li" content={item} />),
  );
};

List.defaultProps = { tag: 'ul' };
