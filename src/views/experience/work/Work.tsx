import style from './work.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { List, MarkdownViewer, Panel } from '@/components';

export const WorkExperience: FC = (): ReactElement => {
  const { workExperience: companies } = useContext(DataContext);

  return (
    <Panel className={style.root} title="工作经历">
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
