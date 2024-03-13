import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { Panel, Project } from '@/components/common';
import style from './project.module.scss';

export const ProjectExperience: FC = (): ReactElement => {
  const { projectExperience: projects } = useContext(DataContext);

  return (
    <Panel title="项目经历">
      <ul className={style['project-list']}>
        {projects.map((project, i) => {
          return (
            <li key={i} className={style.project}>
              <Project project={project} />
            </li>
          );
        })}
      </ul>
    </Panel>
  );
};
