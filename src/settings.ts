import { Settings } from './interfaces';

export const settings: Settings = {
  visible: {
    info: true,
    skill: true,
    workExperience: true,
    projectExperience: true,
    github: true,
    personalProject: true,
    evaluation: true,
    personalAdvantage: true,
  },
  // import.meta.env.APP_LAST_MODIFIED 来自于 vite.config.ts
  lastModified: import.meta.env.APP_LAST_MODIFIED,
};
