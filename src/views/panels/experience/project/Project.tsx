import { DataContext } from '@/context';
import React from 'react';
import { Panel, Project } from '@/components';
import style from './project.module.scss';
import { usePanelSetting } from '@/hooks';

/**
 * 项目经历
 */
export const ProjectExperience: React.FC = (): React.ReactElement => {
  const { projectExperience: projects } = React.useContext(DataContext);
  const { name } = usePanelSetting('projectExperience');

  return (
    <Panel title={name}>
      <ul className={style['project-list']}>
        {projects.map((project, i) => {
          return (
            <li key={i}>
              <Project project={project} />
            </li>
          );
        })}
      </ul>
    </Panel>
  );
};
