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
  /**
   * 到岗时间
   */
  arrival: string;
}
