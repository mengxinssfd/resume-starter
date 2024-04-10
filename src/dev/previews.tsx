import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import { Layout } from '@/Layout';
import { Evaluation, Header, WorkExperience } from '@/views';
import { Panel, Project } from '@/components';
import data from '@/data';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Layout">
        <Layout data={data} />
      </ComponentPreview>
      <ComponentPreview path="/WorkExperience">
        <WorkExperience />
      </ComponentPreview>
      <ComponentPreview path="/Project">
        <Project project={data.projectExperience[1]} />
      </ComponentPreview>
      <ComponentPreview path="/Panel">
        <Panel title="测试一下" />
      </ComponentPreview>
      <ComponentPreview path="/Evaluation">
        <Evaluation />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
