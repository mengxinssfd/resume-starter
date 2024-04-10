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
} from '@/views';
import { presetSettings } from '@/settings.preset';
import type { FC, FunctionComponent, ReactElement } from 'react';
import './index.scss';
import type { Data, Settings, SortablePanels } from '@/interfaces';
import { DataContext, SettingContext } from './context';

const map: Record<SortablePanels, FunctionComponent> = {
  skill: Skill,
  personalAdvantage: PersonalAdvantage,
  workExperience: WorkExperience,
  projectExperience: ProjectExperience,
  github: GitHub,
  personalProject: PersonalProject,
  evaluation: Evaluation,
};

export const Layout: FC<{ data: Data; settings?: Settings }> = ({
  data,
  settings,
}): ReactElement => {
  settings = Object.assign({}, presetSettings, settings);
  return (
    <SettingContext.Provider value={settings}>
      <DataContext.Provider value={data}>
        <Header />
        <article>
          <Info />
          <section className="body">
            {settings.sortedPanels?.map((k) => {
              const Comp = map[k];
              return <Comp key={k} />;
            })}
          </section>
        </article>
        <Footer />
      </DataContext.Provider>
    </SettingContext.Provider>
  );
};
