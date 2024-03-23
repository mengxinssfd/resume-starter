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
import data from '@/data';
import { DataContext } from './context';

const { visible } = Settings;

const Layout: FC = (): ReactElement => {
  return (
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
  );
};

export default Layout;
