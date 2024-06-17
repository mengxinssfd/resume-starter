import style from './skill.module.scss';
import { DataContext } from '@/context';
import React, { useContext } from 'react';
import { List, Panel } from '@/components';
import { usePanelSetting } from '@/hooks';

/**
 * 技能
 */
export const Skill: React.FC = (): React.ReactElement => {
  const { skillList } = useContext(DataContext);
  const { name } = usePanelSetting('skill');

  return (
    <Panel className={style.root} title={name}>
      <List tag="ul" list={skillList} />
    </Panel>
  );
};
