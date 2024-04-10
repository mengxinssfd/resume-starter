import style from './skill.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { List, Panel } from '@/components';
import { usePanelSetting } from '@/utils';

/**
 * 技能
 */
export const Skill: FC = (): ReactElement => {
  const { skillList } = useContext(DataContext);
  const { name } = usePanelSetting('skill');

  return (
    <Panel className={style.root} title={name}>
      <List tag="ul" list={skillList} />
    </Panel>
  );
};
