import style from './evaluation.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { MarkdownViewer, Panel } from '@/components/common';

export const Evaluation: FC = (): ReactElement => {
  const { evaluation } = useContext(DataContext);

  return (
    <Panel className={style.root} title="自我评价">
      <MarkdownViewer content={evaluation} />
    </Panel>
  );
};
