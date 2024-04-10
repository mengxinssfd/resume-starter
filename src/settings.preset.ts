import { Settings } from './interfaces';

export const presetSettings = {
  sortedPanels: [
    'skill',
    'personalAdvantage',
    'workExperience',
    'projectExperience',
    'github',
    'personalProject',
    'evaluation',
  ],
  panels: {
    info: { name: '个人信息' },
    skill: { name: '技能' },
    workExperience: { name: '工作经验' },
    projectExperience: { name: '项目经验' },
    github: { name: 'GitHub' },
    personalProject: { name: '个人项目', tipsVisible: true },
    evaluation: { name: '自我评价' },
    personalAdvantage: { name: '个人优势' },
  },
  // import.meta.env.APP_LAST_MODIFIED 来自于 vite.config.ts
  lastModified: import.meta.env.APP_LAST_MODIFIED,
} satisfies Settings;
