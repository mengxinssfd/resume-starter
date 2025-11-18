export interface PersonalProject {
  /**
   * 项目名称
   */
  name: string;
  /**
   * 项目描述
   */
  desc: string;
  /**
   * 项目链接
   */
  link?: string;
}

export interface Project extends PersonalProject {
  /**
   * 技术栈
   */
  technologyStack?: string[];
  /**
   * 项目所花费的时间
   */
  time?: [start: string, end: string];
  /**
   * 行动与结果
   */
  result: string[];
}
