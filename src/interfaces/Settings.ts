export interface Panel {
  /**
   * 板块名称
   */
  name?: string;
}

export type SortablePanels =
  | 'skill'
  | 'workExperience'
  | 'projectExperience'
  | 'github'
  | 'personalProject'
  | 'evaluation'
  | 'personalAdvantage';

export interface Settings {
  /**
   * 排序后的板块，不在该数组中的板块会被隐藏
   */
  sortedPanels?: SortablePanels[];
  info?: {
    /**
     * 工作经验计算保留小数点位数
     */
    workAtFractionDigits?: number;
  };
  /**
   * 配置板块的名称或其它配置
   */
  panels: {
    skill?: Panel;
    workExperience?: Panel;
    projectExperience?: Panel;
    github?: Panel;
    personalProject?: Panel & {
      /**
       * 是否显示小尾巴
       */
      tipsVisible?: boolean;
    };
    evaluation?: Panel;
    personalAdvantage?: Panel;
  };
  /**
   * 最后更新时间
   */
  lastModified: string;
}
