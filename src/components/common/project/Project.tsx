import style from './project.module.scss';
import type { FC, ReactElement } from 'react';
import type { Project as ProjectType } from '@/interfaces';
import { getClassNames } from '@tool-pack/basic';

export const Project: FC<{ project: ProjectType }> = ({
  project,
}): ReactElement => {
  return (
    <section className={getClassNames('pre-line', style.root)}>
      <div className="item">
        <div className="item-bd">
          <strong className="project-name">《{project.name}》</strong>
        </div>
      </div>
      <div className="item">
        {project.time && (
          <div className="item-bd">
            <span className="label">时间:</span>
            <span className="content">{project.time.join(' - ')}</span>
          </div>
        )}
        {project.link && (
          <div className="item-bd">
            <span className="label">链接:</span>
            <span className="content">
              {project.link?.split(';').map((link) => {
                return (
                  <a key={link} href={link} target="_blank" rel="noreferrer">
                    {link}
                  </a>
                );
              })}
            </span>
          </div>
        )}
        {project.technologyStack && (
          <div className="technology-stack item-bd">
            <span className="label">技术栈:</span>
            <span className="content">{project.technologyStack}</span>
          </div>
        )}
        <div className="project-desc item-bd pre-line">
          <div className="label">情景(Situation):</div>
          <div className="content">{project.situation}</div>
        </div>
        <div className="project-desc item-bd pre-line">
          <div className="label">任务(Task):</div>
          <div className="content">{project.task}</div>
        </div>
        <div className="project-desc item-bd pre-line">
          <div className="label">行动(Action):</div>
          <ol className="content">
            {project.action.map((desc, index) => {
              return <li key={index}>{desc}</li>;
            })}
          </ol>
        </div>
        <div className="project-desc item-bd pre-line">
          <div className="label">结果(Result):</div>
          <ol className="content">
            {project.result.map((desc, index) => {
              return <li key={index}>{desc}</li>;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
