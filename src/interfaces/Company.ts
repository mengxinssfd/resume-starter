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
