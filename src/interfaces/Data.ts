import { Company, Contact, Info, PersonalProject, Project } from '@/interfaces';

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
