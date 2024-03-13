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
      <article>
        {visible.info && <Info />}
        <section className="body">
          {visible.skill && <Skill />}
          {visible.workExperience && <WorkExperience />}
          {visible.projectExperience && <ProjectExperience />}
          {visible.github && <GitHub />}
          {visible.personalProject && <PersonalProject />}
          {visible.evaluation && <Evaluation />}
        </section>
      </article>
      <Footer />
    </>
  );
};

export default App;
