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

export interface Project {
  /**
   * 项目名称
   */
  name: string;
  /**
   * 项目链接
   */
  link?: string;
  /**
   * 技术栈
   */
  technologyStack?: string;

  /**
   * 项目所花费的时间
   */
  time?: [start: string, end: string];

  // STAR 法则
  /**
   * 情景
   */
  situation: string;
  /**
   * 任务
   */
  task: string;
  /**
   * 行动
   */
  action: string[];
  /**
   * 结果
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
  desc: string;
  /**
   * 职责和成就
   */
  duty: string[];
}

export interface PersonalProject {
  name: string;
  desc: string;
  link: string;
}

export interface Data {
  info: Info;
  contact: Contact;
  projectExperience: Project[];
  workExperience: Company[];
  personalProject: PersonalProject[];
  skillList: string[];
  evaluation: string;
}
