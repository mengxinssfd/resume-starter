import React, { useContext } from 'react';
import type { SortablePanels } from '@/interfaces';
import {
  Evaluation,
  GitHub,
  PersonalAdvantage,
  PersonalProject,
  ProjectExperience,
  Skill,
  Info,
  WorkExperience,
} from '@/views';
import { SettingContext } from '@/context';

const map: Record<SortablePanels, React.FunctionComponent> = {
  skill: Skill,
  personalAdvantage: PersonalAdvantage,
  workExperience: WorkExperience,
  projectExperience: ProjectExperience,
  github: GitHub,
  personalProject: PersonalProject,
  evaluation: Evaluation,
};

export const Body: React.FC = (): React.ReactElement => {
  const { sortedPanels } = useContext(SettingContext);
  return (
    <article>
      <Info />
      <section className="body">
        {sortedPanels?.map((k) => {
          const Comp = map[k];
          return <Comp key={k} />;
        })}
      </section>
    </article>
  );
};
