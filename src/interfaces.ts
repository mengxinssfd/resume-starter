export interface Info {
  /**
   * 姓名
   */
  name: string;
  /**
   * 性别
   */
  gender: '男' | '女';
  /**
   * 籍贯
   */
  from: string;
  /**
   * 求职职位
   */
  job: string;
  /**
   * 教育水平 高中/大专/本科/硕士/博士
   */
  education: string;
  /**
   * 毕业院校
   */
  graduatedSchool: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 开始工作的日期 或 工作年限，如果是 Date 类型会自动计算工作年限
   */
  workAt: Date | number;
}
export interface Contact {
  /**
   * 邮箱地址
   */
  email: string;
  /**
   * 电话号码
   */
  phone: string;
  /**
   * github username 用户名
   */
  github?: string;
  /**
   * 博客地址
   */
  blog?: string;
}

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

export interface Company {
  /**
   * 公司名称
   */
  name: string;
  /**
   * 所在岗位
   */
  job: string;
  /**
   * 在职时间
   */
  time: [start: string, end: string];
  /**
   * 公司描述
   */
  desc?: string;
  /**
   * 职责和成就
   */
  duty: string[];
}

export interface Data {
  /**
   * 个人信息
   */
  info: Info;
  /**
   * 联系方式
   */
  contact: Contact;
  /**
   * 项目经验
   */
  projectExperience: Project[];
  /**
   * 工作经验
   */
  workExperience: Company[];
  /**
   * 个人项目
   */
  personalProject: PersonalProject[];
  /**
   * 技能列表
   */
  skillList: string[];
  /**
   * 自我评价
   */
  evaluation: string;
  /**
   * 个人优势
   */
  personalAdvantage: string[];
}

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
  /**
   * 配置板块的名称或其它配置
   */
  panels: {
    info?: Panel;
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
