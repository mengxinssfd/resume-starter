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
import { settings as globalSettings } from '@/settings';
import type { FC, ReactElement } from 'react';
import './index.scss';
import type { Data, Settings } from '@/interfaces';
import { DataContext, SettingContext } from './context';

export const Layout: FC<{ data: Data; settings?: Settings }> = ({
  data,
  settings,
}): ReactElement => {
  settings = Object.assign(globalSettings, settings);
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
