import style from './work.module.scss';
import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { Panel } from '@/components/common';

export const WorkExperience: FC = (): ReactElement => {
  const { workExperience: companies } = useContext(DataContext);

  return (
    <Panel className={style.root} title="工作经历">
      {companies.map((company, index) => {
        return (
          <section key={index} className="company">
            <h3 className="header">
              <strong className="name">{company.name}</strong>
              <span className="line"> - </span>
              <span className="job">[{company.job}]</span>
              <span className="time">({company.time.join(' - ')})</span>
            </h3>
            <div className="body">
              <div className="desc">{company.desc}</div>
              <div className="duty">
                <ul>
                  {company.duty.map((it) => {
                    return <li key={it}>{it}</li>;
                  })}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </Panel>
  );
};
