import style from './personal-advantage.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { List, Panel } from '@/components';
import { usePanelSetting } from '@/hooks';

/**
 * 个人优势
 */
export const PersonalAdvantage: FC = (): ReactElement => {
  const { personalAdvantage } = useContext(DataContext);
  const { name } = usePanelSetting('personalAdvantage');

  return (
    <Panel className={style.root} title={name}>
      <List tag="ul" list={personalAdvantage} />
    </Panel>
  );
};
