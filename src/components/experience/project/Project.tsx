import { DataContext } from '@/context';
import { useContext, type FC, type ReactElement } from 'react';
import { Panel, Projects } from '@/components/common';

export const ProjectExperience: FC = (): ReactElement => {
  const { projectExperience: projects } = useContext(DataContext);

  return (
    <Panel title="项目经历">
      <Projects projects={projects} />
    </Panel>
  );
};
