import style from './skill.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { List, Panel } from '@/components/common';

export const Skill: FC = (): ReactElement => {
  const { skillList } = useContext(DataContext);

  return (
    <Panel className={style.root} title="技能">
      <List tag="ul" list={skillList} />
    </Panel>
  );
};
