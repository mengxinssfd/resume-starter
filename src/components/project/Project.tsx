import style from './project.module.scss';
import React from 'react';
import type { Project as ProjectType } from '@/interfaces';
import { getClassNames } from '@tool-pack/basic';
import { List, MarkdownViewer } from '@/components';

export const Project: React.FC<{ project: ProjectType }> = ({
  project,
}): React.ReactElement => {
  return (
    <section className={getClassNames('pre-line', style.root)}>
      <div className="item">
        <div className="item-bd">
          <strong className="project-name">{project.name}</strong>
          {project.time && (
            <>
              <span className="line"> - </span>
              <span className="time">({project.time.join(' - ')})</span>
            </>
          )}
        </div>
      </div>
      <div className="item">
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
        <div className="desc item-bd pre-line">
          <span className="label">描述:</span>
          <MarkdownViewer
            tag="span"
            className="content"
            content={project.desc}
          />
        </div>
        {project.technologyStack && (
          <div className="technology-stack item-bd">
            <span className="label">技术栈:</span>
            <span className="content">
              {project.technologyStack.join(' + ')}
            </span>
          </div>
        )}
        <div className="result item-bd pre-line">
          <div className="label">成果:</div>
          <List tag="ol" className="content" list={project.result} />
        </div>
      </div>
    </section>
  );
};
