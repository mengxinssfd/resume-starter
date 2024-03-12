import style from './app.module.scss';
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
} from '@/components';
import { Settings } from '@/settings';
import type { FC, ReactElement } from 'react';

const { visible } = Settings;

const App: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={style.app}>
        {visible.info && <Info />}
        <article className="box">
          {visible.skill && <Skill />}
          {visible.workExperience && <WorkExperience />}
          {visible.projectExperience && <ProjectExperience />}
          {visible.github && <GitHub />}
          {visible.personalProject && <PersonalProject />}
          {visible.evaluation && <Evaluation />}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default App;
