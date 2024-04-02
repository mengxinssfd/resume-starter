import {
  Header,
  Info,
  Skill,
  ProjectExperience,
  WorkExperience,
  GitHub,
  PersonalProject,
  Evaluation,
  Footer,
  PersonalAdvantage,
} from '@/components';
import { Settings } from '@/settings';
import type { FC, ReactElement } from 'react';
import './index.scss';
import type { Data } from '@/interfaces';
import { DataContext, SettingContext } from './context';

export const Layout: FC<{ data: Data; settings?: typeof Settings }> = ({
  data,
  settings,
}): ReactElement => {
  settings = Object.assign(Settings, settings);
  const { visible } = settings;
  return (
    <SettingContext.Provider value={settings}>
      <DataContext.Provider value={data}>
        <Header />
        <article>
          {visible.info && <Info />}
          <section className="body">
            {visible.skill && <Skill />}
            {visible.personalAdvantage && <PersonalAdvantage />}
            {visible.workExperience && <WorkExperience />}
            {visible.projectExperience && <ProjectExperience />}
            {visible.github && <GitHub />}
            {visible.personalProject && <PersonalProject />}
            {visible.evaluation && <Evaluation />}
          </section>
        </article>
        <Footer />
      </DataContext.Provider>
    </SettingContext.Provider>
  );
};
