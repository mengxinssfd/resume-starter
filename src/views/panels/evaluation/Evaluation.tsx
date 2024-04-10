import style from './evaluation.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { MarkdownViewer, Panel } from '@/components';
import { usePanelSetting } from '@/hooks';

/**
 * 自我评价
 */
export const Evaluation: FC = (): ReactElement => {
  const { evaluation } = useContext(DataContext);
  const { name } = usePanelSetting('evaluation');

  return (
    <Panel className={style.root} title={name}>
      <MarkdownViewer content={evaluation} />
    </Panel>
  );
};
