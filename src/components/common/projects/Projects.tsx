import type { Project as ProjectType } from '@/interfaces';
import { Project } from '@/components/common/project';
import style from './projects.module.scss';
import type { FC, ReactElement } from 'react';

export const Projects: FC<{ projects: ProjectType[] }> = ({
  projects,
}): ReactElement => {
  return (
    <section className={style.root}>
      <ul className="project-list">
        {projects.map((project, i) => {
          return (
            <li key={i} className="project">
              <Project project={project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
