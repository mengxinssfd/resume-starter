import style from './skill.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { Panel } from '@/components/common';

export const Skill: FC = (): ReactElement => {
  const { skillList } = useContext(DataContext);

  return (
    <Panel className={style.root} title="技能">
      <ul>
        {skillList.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </Panel>
  );
};
