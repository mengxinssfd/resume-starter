import style from './evaluation.module.scss';
import { DataContext } from '@/context';
import React from 'react';
import { MarkdownViewer, Panel } from '@/components';
import { usePanelSetting } from '@/hooks';

/**
 * 自我评价
 */
export const Evaluation: React.FC = (): React.ReactElement => {
  const { evaluation } = React.useContext(DataContext);
  const { name } = usePanelSetting('evaluation');

  return (
    <Panel className={style.root} title={name}>
      <MarkdownViewer content={evaluation} />
    </Panel>
  );
};
