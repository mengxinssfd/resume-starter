import style from './personal-project.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { Panel } from '@/components';
import { getGitHubLink } from '@/utils';
import { usePanelSetting } from '@/hooks';

/**
 * 个人项目
 */
export const PersonalProject: FC = (): ReactElement => {
  const { personalProject: projects, contact } = useContext(DataContext);
  const { tipsVisible, name } = usePanelSetting('personalProject');

  const link = contact.github ? getGitHubLink(contact.github) : '';
  return (
    <Panel className={style.root} title={name}>
      {/*<Projects projects={projects} />*/}
      <ul className="project-list">
        {projects.map((project, i) => {
          return (
            <li key={i}>
              <div className="project">
                <strong className="name">《{project.name}》</strong>
                <span className="desc">{project.desc}</span>
                <a
                  className="link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer">
                  {project.link}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      {link && tipsVisible && (
        <div className="tips">
          更多项目请移步本人{' '}
          <a href={link} target="__blank">
            GitHub
          </a>{' '}
          查看 。
        </div>
      )}
    </Panel>
  );
};
