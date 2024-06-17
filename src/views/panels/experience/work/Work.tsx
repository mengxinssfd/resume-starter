import style from './work.module.scss';
import { DataContext } from '@/context';
import React from 'react';
import { List, MarkdownViewer, Panel } from '@/components';
import { usePanelSetting } from '@/hooks';

/**
 * 工作经历
 */
export const WorkExperience: React.FC = (): React.ReactElement => {
  const { workExperience: companies } = React.useContext(DataContext);
  const { name } = usePanelSetting('workExperience');

  return (
    <Panel className={style.root} title={name}>
      <ul className="work-list">
        {companies.map((company, index) => {
          return (
            <li key={index}>
              <section className="company">
                <h3 className="header">
                  <strong className="name">{company.name}</strong>
                  <span className="line"> - </span>
                  <span className="job">[{company.job}]</span>
                  <span className="time">({company.time.join(' - ')})</span>
                </h3>
                <div className="body">
                  {company.desc && (
                    <MarkdownViewer className="desc" content={company.desc} />
                  )}
                  <div className="duty">
                    <List tag="ul" list={company.duty} />
                  </div>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
};
